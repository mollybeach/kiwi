import { Model, ModelCtor } from 'sequelize-typescript'
import { FindOptions } from 'sequelize'
import to from 'await-to-js'

export interface PaginationOptions {
  options?: FindOptions
  searchText?: string
  currentPage?: number
  pageLimit?: number
  optionsForCalculateTotal?: FindOptions
}

export default class Paginator<T extends Model> {
  private model: ModelCtor<T>

  constructor(model: ModelCtor<T>) {
    this.model = model
  }

  async paginate({
    options,
    currentPage = 1,
    pageLimit = 25,
    optionsForCalculateTotal
  }: PaginationOptions) {
    const offset = (currentPage - 1) * pageLimit

    const [errorTotal, resultsTotal] = await to(
      this.model.findAll<T>(optionsForCalculateTotal ?? options)
    )
    if (errorTotal) {
      throw errorTotal
    }

    const totalRecords = resultsTotal.length

    const [error, results] = await to(
      this.model.findAll<T>({ ...options, offset, limit: pageLimit })
    )

    if (error) {
      throw error
    }

    const lastPage = totalRecords > 0 ? Math.ceil(totalRecords / pageLimit) : 0
    const hasMorePages = currentPage < lastPage

    return { lastPage, totalRecords, currentPage, hasMorePages, data: results }
  }
}
