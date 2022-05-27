export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  boardImage?: Maybe<Array<IBoardImage>>;
  centerName: Scalars['String'];
  centerOwnerName: Scalars['String'];
  centerPhone: Scalars['String'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  location1: Scalars['String'];
  location2: Scalars['String'];
  recruitCount: Scalars['Int'];
  serviceDate: Scalars['DateTime'];
  serviceTime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: IUser;
};

export type IBoardImage = {
  __typename?: 'BoardImage';
  board: IBoard;
  id: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type IChatHistory = {
  __typename?: 'ChatHistory';
  board: IBoard;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  user: IUser;
};

export type ICreateBoardInput = {
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  centerName: Scalars['String'];
  centerOwnerName: Scalars['String'];
  centerPhone: Scalars['String'];
  contents: Scalars['String'];
  location1: Scalars['String'];
  location2: Scalars['String'];
  recruitCount?: InputMaybe<Scalars['Int']>;
  serviceDate: Scalars['DateTime'];
  serviceTime: Scalars['Int'];
  title: Scalars['String'];
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type ICreateProductImageInput = {
  imageUrl: Scalars['String'];
  productId: Scalars['String'];
};

export type ICreateProductInput = {
  details: Scalars['String'];
  imageUrls: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type ICreatePurchaseInput = {
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  itemCount: Scalars['Int'];
  productId: Scalars['String'];
  receiverName: Scalars['String'];
  receiverPhone: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type IDibs = {
  __typename?: 'Dibs';
  id: Scalars['String'];
  product: IProduct;
  user: IUser;
};

export type IDonation = {
  __typename?: 'Donation';
  amount: Scalars['Int'];
  cancelledAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export enum IEnroll_Status_Enum {
  Complete = 'COMPLETE',
  Enroll = 'ENROLL'
}

export type IEnroll = {
  __typename?: 'Enroll';
  board: IBoard;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  status: IEnroll_Status_Enum;
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelDonation: IDonation;
  cancelPurchase: IPurchase;
  checkPhoneAuthToken: Scalars['String'];
  createBoard: IBoard;
  createDibs: IDibs;
  createDonation: IDonation;
  createEnroll: IEnroll;
  createProduct: IProduct;
  createProductImage: IProductImage;
  createPurchase: IPurchase;
  createUser: IUser;
  createWallpaper: IWallpaper;
  deleteBoard: Scalars['Boolean'];
  deleteDibs: Scalars['Boolean'];
  deleteEnroll: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteProductImage: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteWallpaper: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  resetPassword: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  sendPhoneAuthToken: Scalars['String'];
  sendThanksMailTest: Scalars['String'];
  updateBoard: IBoard;
  updateEnroll: IEnroll;
  updateProduct: IProduct;
  updateProductImage: Array<IProductImage>;
  updateUser: IUser;
  updateUserImage: IUser;
  updateWallpaper: IWallpaper;
  uploadImage: Scalars['String'];
};


export type IMutationCancelDonationArgs = {
  impUid: Scalars['String'];
};


export type IMutationCancelPurchaseArgs = {
  purchaseId: Scalars['String'];
};


export type IMutationCheckPhoneAuthTokenArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateDibsArgs = {
  productId: Scalars['String'];
};


export type IMutationCreateDonationArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationCreateEnrollArgs = {
  boardId: Scalars['String'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateProductImageArgs = {
  createProductImageInput: ICreateProductImageInput;
};


export type IMutationCreatePurchaseArgs = {
  createPurchaseInput: ICreatePurchaseInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateWallpaperArgs = {
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteDibsArgs = {
  productId: Scalars['String'];
};


export type IMutationDeleteEnrollArgs = {
  boardId: Scalars['String'];
  enrollId: Scalars['String'];
};


export type IMutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type IMutationDeleteProductImageArgs = {
  productImageId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationDeleteWallpaperArgs = {
  wallpaperId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationResetPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationSendPhoneAuthTokenArgs = {
  phone: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateEnrollArgs = {
  boardId: Scalars['String'];
  enrollId: Scalars['String'];
};


export type IMutationUpdateProductArgs = {
  productId: Scalars['String'];
  updateProductInput: IUpdateProductInput;
};


export type IMutationUpdateProductImageArgs = {
  updateProductImageInput: IUpdateProductImageInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserImageArgs = {
  profileImageUrl: Scalars['String'];
};


export type IMutationUpdateWallpaperArgs = {
  imageUrl: Scalars['String'];
  title: Scalars['String'];
  wallpaperId: Scalars['String'];
};


export type IMutationUploadImageArgs = {
  file: Scalars['Upload'];
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IProduct = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  details: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  productImage: Array<IProductImage>;
};

export type IProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  product: IProduct;
};

export type IPurchase = {
  __typename?: 'Purchase';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  cancelledAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  invoiceNo: Scalars['String'];
  itemCount: Scalars['Int'];
  product: IProduct;
  receiverName: Scalars['String'];
  receiverPhone: Scalars['String'];
  usedPoint: Scalars['Int'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAllUsersDonationsAmount: Scalars['Int'];
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchBoardsAll: Array<IBoard>;
  fetchBoardsCount: Scalars['Int'];
  fetchBoardsNearDeadline: Array<IBoard>;
  fetchBoardsOfUser: Array<IBoard>;
  fetchChatHistory: Array<IChatHistory>;
  fetchDonationAmount: Scalars['Int'];
  fetchDonations: Array<IDonation>;
  fetchEnrollsByBoardId: Array<IEnroll>;
  fetchEnrollsByUserId: Array<IEnroll>;
  fetchLogInUserDibs: Array<IDibs>;
  fetchLoginUser: IUser;
  fetchProduct: IProduct;
  fetchProductImage: IProductImage;
  fetchProductImages: Array<IProductImage>;
  fetchProducts: Array<IProduct>;
  fetchPurchases: Array<IPurchase>;
  fetchWallpaper: IWallpaper;
  fetchWallpapers: Array<IWallpaper>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  location1?: InputMaybe<Scalars['String']>;
  location2?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardsCountArgs = {
  location1?: InputMaybe<Scalars['String']>;
  location2?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardsNearDeadlineArgs = {
  location1?: InputMaybe<Scalars['String']>;
  location2?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchChatHistoryArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchEnrollsByBoardIdArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchProductArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchProductImageArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchProductImagesArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchWallpaperArgs = {
  wallpaperId: Scalars['String'];
};

export type IUpdateBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  centerName?: InputMaybe<Scalars['String']>;
  centerOwnerName?: InputMaybe<Scalars['String']>;
  centerPhone?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  location1?: InputMaybe<Scalars['String']>;
  location2?: InputMaybe<Scalars['String']>;
  recruitCount?: InputMaybe<Scalars['Int']>;
  serviceDate?: InputMaybe<Scalars['DateTime']>;
  serviceTime?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateProductImageInput = {
  imageUrl: Array<Scalars['String']>;
  productId: Scalars['String'];
};

export type IUpdateProductInput = {
  details?: InputMaybe<Scalars['String']>;
  imageUrls?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type IUpdateUserInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  donationAmount: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  point: Scalars['Int'];
  profileImageUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  serviceTime: Scalars['Int'];
};

export type IWallpaper = {
  __typename?: 'Wallpaper';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
