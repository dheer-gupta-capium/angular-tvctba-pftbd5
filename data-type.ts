export enum DataType {
  Unknown = 0,
  String = 1,
  Byte = 2,
  Word = 3,
  Int32 = 4,
  Int64 = 5,
  Bool = 6,
  Float = 7,
  Currency = 8,
  BCD = 9,
  Date = 10,
  Time = 11,
  DateTime = 12,
  Autoinc = 13,
  Memo = 14,
  Blob = 15,
  FixedChar = 16,
  Guid = 17,
  Geometry = 18,
  Geography = 19,
  URL = 20,
  InputDecimal = 21,
  InputCalculator = 22,
  DropDown = 23,
  CurrencySymbol = 24,
}

export enum ActionType {
  Create = 1,
  Update = 2,
  Archive = 3,
  Restore = 4,
  Delete = 5,
  Export = 6,
  View = 7,
  Import = 8,
  Email = 9,
  Sell = 10,
  Dispose = 11,
  Explain = 12,
  Activate = 13,
  Refresh = 14,
  Reconfirm = 15,
  AddReceipt = 16,
  AddPayment = 17,
  AllocateRefund = 18,
  RollBack = 19,
  BadDebtsEntry = 20,
  CreateInvoice = 21,
  DownloadCertificate = 22,
  EmailWithPaymentLink = 23,
  SubmitToHMRC = 24,
  FlatRateAdjustment = 25,
  AllocateReceipt = 26,
  FixedAssetReturn = 27,
  UnAllocateAmount = 28,
}
