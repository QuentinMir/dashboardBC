export class DataModel {
  // Cards data
  private _totalSales: number;
  private _totalCarts: number;
  private _totalOrders: number;
  private _avgCart: number;
  private _newClient: number;
  private _existingClient: number;

  // Linecharts data
  private _visits: number[];
  private _createdCarts: number[];

  //Sum up table data
  private _productName: string[];
  private _nbOfUnits: number[];
  private _categoryName: string[];

  constructor(
    totalSales: number,
    totalCarts: number,
    totalOrders: number,
    avgCart: number,
    newClient: number,
    existingClient: number,
    visits: number[],
    createdOrders: number[],
    createdCarts: number[],
    productName: string[],
    nbOfUnits: number[],
    categoryName: string[]
  ) {
    this._totalSales = totalSales;
    this._totalCarts = totalCarts;
    this._totalOrders = totalOrders;
    this._avgCart = avgCart;
    this._newClient = newClient;
    this._existingClient = existingClient;
    this._visits = visits;
    this._createdCarts = createdCarts;
    this._productName = productName;
    this._nbOfUnits = nbOfUnits;
    this._categoryName = categoryName;
  }

  /**
   * Getter totalSales
   * @return {number}
   */
  public get totalSales(): number {
    return this._totalSales;
  }

  /**
   * Getter totalCarts
   * @return {number}
   */
  public get totalCarts(): number {
    return this._totalCarts;
  }

  /**
   * Getter totalOrders
   * @return {number}
   */
  public get totalOrders(): number {
    return this._totalOrders;
  }

  /**
   * Getter avgCart
   * @return {number}
   */
  public get avgCart(): number {
    return this._avgCart;
  }


  /**
   * Getter newClient
   * @return {number}
   */
  public get newClient(): number {
    return this._newClient;
  }

  /**
   * Getter existingClient
   * @return {number}
   */
  public get existingClient(): number {
    return this._existingClient;
  }

  /**
   * Getter visits
   * @return {number[]}
   */
  public get visits(): number[] {
    return this._visits;
  }


  /**
   * Getter createdCarts
   * @return {number[]}
   */
  public get createdCarts(): number[] {
    return this._createdCarts;
  }

  /**
   * Getter productName
   * @return {string[]}
   */
  public get productName(): string[] {
    return this._productName;
  }

  /**
   * Getter nbOfUnits
   * @return {number[]}
   */
  public get nbOfUnits(): number[] {
    return this._nbOfUnits;
  }

  /**
   * Getter categoryName
   * @return {string[]}
   */
  public get categoryName(): string[] {
    return this._categoryName;
  }

  /**
   * Setter totalSales
   * @param {number} value
   */
  public set totalSales(value: number) {
    this._totalSales = value;
  }

  /**
   * Setter totalCarts
   * @param {number} value
   */
  public set totalCarts(value: number) {
    this._totalCarts = value;
  }

  /**
   * Setter totalOrders
   * @param {number} value
   */
  public set totalOrders(value: number) {
    this._totalOrders = value;
  }

  /**
   * Setter avgCart
   * @param {number} value
   */
  public set avgCart(value: number) {
    this._avgCart = value;
  }



  /**
   * Setter newClient
   * @param {number} value
   */
  public set newClient(value: number) {
    this._newClient = value;
  }

  /**
   * Setter existingClient
   * @param {number} value
   */
  public set existingClient(value: number) {
    this._existingClient = value;
  }

  /**
   * Setter visits
   * @param {number[]} value
   */
  public set visits(value: number[]) {
    this._visits = value;
  }


  /**
   * Setter createdCarts
   * @param {number[]} value
   */
  public set createdCarts(value: number[]) {
    this._createdCarts = value;
  }

  /**
   * Setter productName
   * @param {string[]} value
   */
  public set productName(value: string[]) {
    this._productName = value;
  }

  /**
   * Setter nbOfUnits
   * @param {number[]} value
   */
  public set nbOfUnits(value: number[]) {
    this._nbOfUnits = value;
  }

  /**
   * Setter categoryName
   * @param {string[]} value
   */
  public set categoryName(value: string[]) {
    this._categoryName = value;
  }
}
