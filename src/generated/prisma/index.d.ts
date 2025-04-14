
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PhoneNumbers
 * 
 */
export type PhoneNumbers = $Result.DefaultSelection<Prisma.$PhoneNumbersPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>
/**
 * Model Conversations
 * 
 */
export type Conversations = $Result.DefaultSelection<Prisma.$ConversationsPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PhoneNumbers
 * const phoneNumbers = await prisma.phoneNumbers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PhoneNumbers
   * const phoneNumbers = await prisma.phoneNumbers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.phoneNumbers`: Exposes CRUD operations for the **PhoneNumbers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneNumbers
    * const phoneNumbers = await prisma.phoneNumbers.findMany()
    * ```
    */
  get phoneNumbers(): Prisma.PhoneNumbersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **Conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.ConversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PhoneNumbers: 'PhoneNumbers',
    Contacts: 'Contacts',
    Conversations: 'Conversations',
    Messages: 'Messages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "phoneNumbers" | "contacts" | "conversations" | "messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PhoneNumbers: {
        payload: Prisma.$PhoneNumbersPayload<ExtArgs>
        fields: Prisma.PhoneNumbersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneNumbersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneNumbersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>
          }
          findFirst: {
            args: Prisma.PhoneNumbersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneNumbersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>
          }
          findMany: {
            args: Prisma.PhoneNumbersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>[]
          }
          create: {
            args: Prisma.PhoneNumbersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>
          }
          createMany: {
            args: Prisma.PhoneNumbersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneNumbersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>[]
          }
          delete: {
            args: Prisma.PhoneNumbersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>
          }
          update: {
            args: Prisma.PhoneNumbersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>
          }
          deleteMany: {
            args: Prisma.PhoneNumbersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneNumbersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhoneNumbersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumbersPayload>
          }
          aggregate: {
            args: Prisma.PhoneNumbersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneNumbers>
          }
          groupBy: {
            args: Prisma.PhoneNumbersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneNumbersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneNumbersCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneNumbersCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      Conversations: {
        payload: Prisma.$ConversationsPayload<ExtArgs>
        fields: Prisma.ConversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findFirst: {
            args: Prisma.ConversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findMany: {
            args: Prisma.ConversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          create: {
            args: Prisma.ConversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          createMany: {
            args: Prisma.ConversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          delete: {
            args: Prisma.ConversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          update: {
            args: Prisma.ConversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          deleteMany: {
            args: Prisma.ConversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.ConversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    phoneNumbers?: PhoneNumbersOmit
    contacts?: ContactsOmit
    conversations?: ConversationsOmit
    messages?: MessagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PhoneNumbersCountOutputType
   */

  export type PhoneNumbersCountOutputType = {
    conversations: number
    messages: number
  }

  export type PhoneNumbersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | PhoneNumbersCountOutputTypeCountConversationsArgs
    messages?: boolean | PhoneNumbersCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * PhoneNumbersCountOutputType without action
   */
  export type PhoneNumbersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbersCountOutputType
     */
    select?: PhoneNumbersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhoneNumbersCountOutputType without action
   */
  export type PhoneNumbersCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }

  /**
   * PhoneNumbersCountOutputType without action
   */
  export type PhoneNumbersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Count Type ContactsCountOutputType
   */

  export type ContactsCountOutputType = {
    conversations: number
    messages: number
  }

  export type ContactsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | ContactsCountOutputTypeCountConversationsArgs
    messages?: boolean | ContactsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ContactsCountOutputType without action
   */
  export type ContactsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsCountOutputType
     */
    select?: ContactsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactsCountOutputType without action
   */
  export type ContactsCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }

  /**
   * ContactsCountOutputType without action
   */
  export type ContactsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    messages: number
    Messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
    Messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Count Type MessagesCountOutputType
   */

  export type MessagesCountOutputType = {
    Conversations: number
    ConversationsLastMessage: number
  }

  export type MessagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Conversations?: boolean | MessagesCountOutputTypeCountConversationsArgs
    ConversationsLastMessage?: boolean | MessagesCountOutputTypeCountConversationsLastMessageArgs
  }

  // Custom InputTypes
  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagesCountOutputType
     */
    select?: MessagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountConversationsLastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PhoneNumbers
   */

  export type AggregatePhoneNumbers = {
    _count: PhoneNumbersCountAggregateOutputType | null
    _min: PhoneNumbersMinAggregateOutputType | null
    _max: PhoneNumbersMaxAggregateOutputType | null
  }

  export type PhoneNumbersMinAggregateOutputType = {
    id: string | null
    displayPhoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneNumbersMaxAggregateOutputType = {
    id: string | null
    displayPhoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneNumbersCountAggregateOutputType = {
    id: number
    displayPhoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneNumbersMinAggregateInputType = {
    id?: true
    displayPhoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneNumbersMaxAggregateInputType = {
    id?: true
    displayPhoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneNumbersCountAggregateInputType = {
    id?: true
    displayPhoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneNumbersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneNumbers to aggregate.
     */
    where?: PhoneNumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumbersOrderByWithRelationInput | PhoneNumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneNumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneNumbers
    **/
    _count?: true | PhoneNumbersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneNumbersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneNumbersMaxAggregateInputType
  }

  export type GetPhoneNumbersAggregateType<T extends PhoneNumbersAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneNumbers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneNumbers[P]>
      : GetScalarType<T[P], AggregatePhoneNumbers[P]>
  }




  export type PhoneNumbersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneNumbersWhereInput
    orderBy?: PhoneNumbersOrderByWithAggregationInput | PhoneNumbersOrderByWithAggregationInput[]
    by: PhoneNumbersScalarFieldEnum[] | PhoneNumbersScalarFieldEnum
    having?: PhoneNumbersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneNumbersCountAggregateInputType | true
    _min?: PhoneNumbersMinAggregateInputType
    _max?: PhoneNumbersMaxAggregateInputType
  }

  export type PhoneNumbersGroupByOutputType = {
    id: string
    displayPhoneNumber: string
    createdAt: Date
    updatedAt: Date
    _count: PhoneNumbersCountAggregateOutputType | null
    _min: PhoneNumbersMinAggregateOutputType | null
    _max: PhoneNumbersMaxAggregateOutputType | null
  }

  type GetPhoneNumbersGroupByPayload<T extends PhoneNumbersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneNumbersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneNumbersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneNumbersGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneNumbersGroupByOutputType[P]>
        }
      >
    >


  export type PhoneNumbersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayPhoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversations?: boolean | PhoneNumbers$conversationsArgs<ExtArgs>
    messages?: boolean | PhoneNumbers$messagesArgs<ExtArgs>
    _count?: boolean | PhoneNumbersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneNumbers"]>

  export type PhoneNumbersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayPhoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["phoneNumbers"]>


  export type PhoneNumbersSelectScalar = {
    id?: boolean
    displayPhoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneNumbersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayPhoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["phoneNumbers"]>
  export type PhoneNumbersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | PhoneNumbers$conversationsArgs<ExtArgs>
    messages?: boolean | PhoneNumbers$messagesArgs<ExtArgs>
    _count?: boolean | PhoneNumbersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhoneNumbersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PhoneNumbersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneNumbers"
    objects: {
      conversations: Prisma.$ConversationsPayload<ExtArgs>[]
      messages: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayPhoneNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneNumbers"]>
    composites: {}
  }

  type PhoneNumbersGetPayload<S extends boolean | null | undefined | PhoneNumbersDefaultArgs> = $Result.GetResult<Prisma.$PhoneNumbersPayload, S>

  type PhoneNumbersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneNumbersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneNumbersCountAggregateInputType | true
    }

  export interface PhoneNumbersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneNumbers'], meta: { name: 'PhoneNumbers' } }
    /**
     * Find zero or one PhoneNumbers that matches the filter.
     * @param {PhoneNumbersFindUniqueArgs} args - Arguments to find a PhoneNumbers
     * @example
     * // Get one PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneNumbersFindUniqueArgs>(args: SelectSubset<T, PhoneNumbersFindUniqueArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneNumbers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneNumbersFindUniqueOrThrowArgs} args - Arguments to find a PhoneNumbers
     * @example
     * // Get one PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneNumbersFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneNumbersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumbersFindFirstArgs} args - Arguments to find a PhoneNumbers
     * @example
     * // Get one PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneNumbersFindFirstArgs>(args?: SelectSubset<T, PhoneNumbersFindFirstArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneNumbers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumbersFindFirstOrThrowArgs} args - Arguments to find a PhoneNumbers
     * @example
     * // Get one PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneNumbersFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneNumbersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumbersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.findMany()
     * 
     * // Get first 10 PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneNumbersWithIdOnly = await prisma.phoneNumbers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneNumbersFindManyArgs>(args?: SelectSubset<T, PhoneNumbersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneNumbers.
     * @param {PhoneNumbersCreateArgs} args - Arguments to create a PhoneNumbers.
     * @example
     * // Create one PhoneNumbers
     * const PhoneNumbers = await prisma.phoneNumbers.create({
     *   data: {
     *     // ... data to create a PhoneNumbers
     *   }
     * })
     * 
     */
    create<T extends PhoneNumbersCreateArgs>(args: SelectSubset<T, PhoneNumbersCreateArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneNumbers.
     * @param {PhoneNumbersCreateManyArgs} args - Arguments to create many PhoneNumbers.
     * @example
     * // Create many PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneNumbersCreateManyArgs>(args?: SelectSubset<T, PhoneNumbersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneNumbers and returns the data saved in the database.
     * @param {PhoneNumbersCreateManyAndReturnArgs} args - Arguments to create many PhoneNumbers.
     * @example
     * // Create many PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneNumbers and only return the `id`
     * const phoneNumbersWithIdOnly = await prisma.phoneNumbers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneNumbersCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneNumbersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneNumbers.
     * @param {PhoneNumbersDeleteArgs} args - Arguments to delete one PhoneNumbers.
     * @example
     * // Delete one PhoneNumbers
     * const PhoneNumbers = await prisma.phoneNumbers.delete({
     *   where: {
     *     // ... filter to delete one PhoneNumbers
     *   }
     * })
     * 
     */
    delete<T extends PhoneNumbersDeleteArgs>(args: SelectSubset<T, PhoneNumbersDeleteArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneNumbers.
     * @param {PhoneNumbersUpdateArgs} args - Arguments to update one PhoneNumbers.
     * @example
     * // Update one PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneNumbersUpdateArgs>(args: SelectSubset<T, PhoneNumbersUpdateArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneNumbers.
     * @param {PhoneNumbersDeleteManyArgs} args - Arguments to filter PhoneNumbers to delete.
     * @example
     * // Delete a few PhoneNumbers
     * const { count } = await prisma.phoneNumbers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneNumbersDeleteManyArgs>(args?: SelectSubset<T, PhoneNumbersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumbersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneNumbersUpdateManyArgs>(args: SelectSubset<T, PhoneNumbersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhoneNumbers.
     * @param {PhoneNumbersUpsertArgs} args - Arguments to update or create a PhoneNumbers.
     * @example
     * // Update or create a PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumbers.upsert({
     *   create: {
     *     // ... data to create a PhoneNumbers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneNumbers we want to update
     *   }
     * })
     */
    upsert<T extends PhoneNumbersUpsertArgs>(args: SelectSubset<T, PhoneNumbersUpsertArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumbersCountArgs} args - Arguments to filter PhoneNumbers to count.
     * @example
     * // Count the number of PhoneNumbers
     * const count = await prisma.phoneNumbers.count({
     *   where: {
     *     // ... the filter for the PhoneNumbers we want to count
     *   }
     * })
    **/
    count<T extends PhoneNumbersCountArgs>(
      args?: Subset<T, PhoneNumbersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneNumbersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumbersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneNumbersAggregateArgs>(args: Subset<T, PhoneNumbersAggregateArgs>): Prisma.PrismaPromise<GetPhoneNumbersAggregateType<T>>

    /**
     * Group by PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumbersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneNumbersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneNumbersGroupByArgs['orderBy'] }
        : { orderBy?: PhoneNumbersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneNumbersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneNumbersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneNumbers model
   */
  readonly fields: PhoneNumbersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneNumbers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneNumbersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends PhoneNumbers$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, PhoneNumbers$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends PhoneNumbers$messagesArgs<ExtArgs> = {}>(args?: Subset<T, PhoneNumbers$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneNumbers model
   */
  interface PhoneNumbersFieldRefs {
    readonly id: FieldRef<"PhoneNumbers", 'String'>
    readonly displayPhoneNumber: FieldRef<"PhoneNumbers", 'String'>
    readonly createdAt: FieldRef<"PhoneNumbers", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneNumbers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneNumbers findUnique
   */
  export type PhoneNumbersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumbers to fetch.
     */
    where: PhoneNumbersWhereUniqueInput
  }

  /**
   * PhoneNumbers findUniqueOrThrow
   */
  export type PhoneNumbersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumbers to fetch.
     */
    where: PhoneNumbersWhereUniqueInput
  }

  /**
   * PhoneNumbers findFirst
   */
  export type PhoneNumbersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumbers to fetch.
     */
    where?: PhoneNumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumbersOrderByWithRelationInput | PhoneNumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneNumbers.
     */
    cursor?: PhoneNumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneNumbers.
     */
    distinct?: PhoneNumbersScalarFieldEnum | PhoneNumbersScalarFieldEnum[]
  }

  /**
   * PhoneNumbers findFirstOrThrow
   */
  export type PhoneNumbersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumbers to fetch.
     */
    where?: PhoneNumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumbersOrderByWithRelationInput | PhoneNumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneNumbers.
     */
    cursor?: PhoneNumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneNumbers.
     */
    distinct?: PhoneNumbersScalarFieldEnum | PhoneNumbersScalarFieldEnum[]
  }

  /**
   * PhoneNumbers findMany
   */
  export type PhoneNumbersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumbers to fetch.
     */
    where?: PhoneNumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumbersOrderByWithRelationInput | PhoneNumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneNumbers.
     */
    cursor?: PhoneNumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    distinct?: PhoneNumbersScalarFieldEnum | PhoneNumbersScalarFieldEnum[]
  }

  /**
   * PhoneNumbers create
   */
  export type PhoneNumbersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneNumbers.
     */
    data: XOR<PhoneNumbersCreateInput, PhoneNumbersUncheckedCreateInput>
  }

  /**
   * PhoneNumbers createMany
   */
  export type PhoneNumbersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneNumbers.
     */
    data: PhoneNumbersCreateManyInput | PhoneNumbersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneNumbers createManyAndReturn
   */
  export type PhoneNumbersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneNumbers.
     */
    data: PhoneNumbersCreateManyInput | PhoneNumbersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneNumbers update
   */
  export type PhoneNumbersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneNumbers.
     */
    data: XOR<PhoneNumbersUpdateInput, PhoneNumbersUncheckedUpdateInput>
    /**
     * Choose, which PhoneNumbers to update.
     */
    where: PhoneNumbersWhereUniqueInput
  }

  /**
   * PhoneNumbers updateMany
   */
  export type PhoneNumbersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneNumbers.
     */
    data: XOR<PhoneNumbersUpdateManyMutationInput, PhoneNumbersUncheckedUpdateManyInput>
    /**
     * Filter which PhoneNumbers to update
     */
    where?: PhoneNumbersWhereInput
  }

  /**
   * PhoneNumbers upsert
   */
  export type PhoneNumbersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneNumbers to update in case it exists.
     */
    where: PhoneNumbersWhereUniqueInput
    /**
     * In case the PhoneNumbers found by the `where` argument doesn't exist, create a new PhoneNumbers with this data.
     */
    create: XOR<PhoneNumbersCreateInput, PhoneNumbersUncheckedCreateInput>
    /**
     * In case the PhoneNumbers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneNumbersUpdateInput, PhoneNumbersUncheckedUpdateInput>
  }

  /**
   * PhoneNumbers delete
   */
  export type PhoneNumbersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
    /**
     * Filter which PhoneNumbers to delete.
     */
    where: PhoneNumbersWhereUniqueInput
  }

  /**
   * PhoneNumbers deleteMany
   */
  export type PhoneNumbersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneNumbers to delete
     */
    where?: PhoneNumbersWhereInput
  }

  /**
   * PhoneNumbers.conversations
   */
  export type PhoneNumbers$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * PhoneNumbers.messages
   */
  export type PhoneNumbers$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * PhoneNumbers without action
   */
  export type PhoneNumbersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumbers
     */
    select?: PhoneNumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumbers
     */
    omit?: PhoneNumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumbersInclude<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsMinAggregateOutputType = {
    waId: string | null
    profileName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    waId: string | null
    profileName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    waId: number
    profileName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactsMinAggregateInputType = {
    waId?: true
    profileName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsMaxAggregateInputType = {
    waId?: true
    profileName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsCountAggregateInputType = {
    waId?: true
    profileName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    waId: string
    profileName: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waId?: boolean
    profileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversations?: boolean | Contacts$conversationsArgs<ExtArgs>
    messages?: boolean | Contacts$messagesArgs<ExtArgs>
    _count?: boolean | ContactsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waId?: boolean
    profileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacts"]>


  export type ContactsSelectScalar = {
    waId?: boolean
    profileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"waId" | "profileName" | "createdAt" | "updatedAt", ExtArgs["result"]["contacts"]>
  export type ContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Contacts$conversationsArgs<ExtArgs>
    messages?: boolean | Contacts$messagesArgs<ExtArgs>
    _count?: boolean | ContactsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {
      conversations: Prisma.$ConversationsPayload<ExtArgs>[]
      messages: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      waId: string
      profileName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `waId`
     * const contactsWithWaIdOnly = await prisma.contacts.findMany({ select: { waId: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `waId`
     * const contactsWithWaIdOnly = await prisma.contacts.createManyAndReturn({
     *   select: { waId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends Contacts$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Contacts$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Contacts$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Contacts$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacts model
   */
  interface ContactsFieldRefs {
    readonly waId: FieldRef<"Contacts", 'String'>
    readonly profileName: FieldRef<"Contacts", 'String'>
    readonly createdAt: FieldRef<"Contacts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts createManyAndReturn
   */
  export type ContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
  }

  /**
   * Contacts.conversations
   */
  export type Contacts$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Contacts.messages
   */
  export type Contacts$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
  }


  /**
   * Model Conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: string | null
    phoneNumberId: string | null
    contactWaId: string | null
    lastMessageId: string | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: string | null
    phoneNumberId: string | null
    contactWaId: string | null
    lastMessageId: string | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    phoneNumberId: number
    contactWaId: number
    lastMessageId: number
    lastMessageAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    id?: true
    phoneNumberId?: true
    contactWaId?: true
    lastMessageId?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    phoneNumberId?: true
    contactWaId?: true
    lastMessageId?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    phoneNumberId?: true
    contactWaId?: true
    lastMessageId?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to aggregate.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type ConversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithAggregationInput | ConversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: ConversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: string
    phoneNumberId: string
    contactWaId: string
    lastMessageId: string | null
    lastMessageAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends ConversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type ConversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumberId?: boolean
    contactWaId?: boolean
    lastMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
    messages?: boolean | Conversations$messagesArgs<ExtArgs>
    lastMessage?: boolean | Conversations$lastMessageArgs<ExtArgs>
    Messages?: boolean | Conversations$MessagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumberId?: boolean
    contactWaId?: boolean
    lastMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
    lastMessage?: boolean | Conversations$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>


  export type ConversationsSelectScalar = {
    id?: boolean
    phoneNumberId?: boolean
    contactWaId?: boolean
    lastMessageId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumberId" | "contactWaId" | "lastMessageId" | "lastMessageAt" | "createdAt" | "updatedAt", ExtArgs["result"]["conversations"]>
  export type ConversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
    messages?: boolean | Conversations$messagesArgs<ExtArgs>
    lastMessage?: boolean | Conversations$lastMessageArgs<ExtArgs>
    Messages?: boolean | Conversations$MessagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
    lastMessage?: boolean | Conversations$lastMessageArgs<ExtArgs>
  }

  export type $ConversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversations"
    objects: {
      phoneNumber: Prisma.$PhoneNumbersPayload<ExtArgs>
      contact: Prisma.$ContactsPayload<ExtArgs>
      messages: Prisma.$MessagesPayload<ExtArgs>[]
      lastMessage: Prisma.$MessagesPayload<ExtArgs> | null
      Messages: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumberId: string
      contactWaId: string
      lastMessageId: string | null
      lastMessageAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type ConversationsGetPayload<S extends boolean | null | undefined | ConversationsDefaultArgs> = $Result.GetResult<Prisma.$ConversationsPayload, S>

  type ConversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface ConversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversations'], meta: { name: 'Conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {ConversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationsFindUniqueArgs>(args: SelectSubset<T, ConversationsFindUniqueArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationsFindFirstArgs>(args?: SelectSubset<T, ConversationsFindFirstArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationsFindManyArgs>(args?: SelectSubset<T, ConversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {ConversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends ConversationsCreateArgs>(args: SelectSubset<T, ConversationsCreateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationsCreateManyArgs>(args?: SelectSubset<T, ConversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {ConversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends ConversationsDeleteArgs>(args: SelectSubset<T, ConversationsDeleteArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {ConversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationsUpdateArgs>(args: SelectSubset<T, ConversationsUpdateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationsDeleteManyArgs>(args?: SelectSubset<T, ConversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationsUpdateManyArgs>(args: SelectSubset<T, ConversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversations.
     * @param {ConversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends ConversationsUpsertArgs>(args: SelectSubset<T, ConversationsUpsertArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationsCountArgs>(
      args?: Subset<T, ConversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationsGroupByArgs['orderBy'] }
        : { orderBy?: ConversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversations model
   */
  readonly fields: ConversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phoneNumber<T extends PhoneNumbersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhoneNumbersDefaultArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contact<T extends ContactsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactsDefaultArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastMessage<T extends Conversations$lastMessageArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$lastMessageArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Messages<T extends Conversations$MessagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$MessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversations model
   */
  interface ConversationsFieldRefs {
    readonly id: FieldRef<"Conversations", 'String'>
    readonly phoneNumberId: FieldRef<"Conversations", 'String'>
    readonly contactWaId: FieldRef<"Conversations", 'String'>
    readonly lastMessageId: FieldRef<"Conversations", 'String'>
    readonly lastMessageAt: FieldRef<"Conversations", 'DateTime'>
    readonly createdAt: FieldRef<"Conversations", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversations findUnique
   */
  export type ConversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findUniqueOrThrow
   */
  export type ConversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findFirst
   */
  export type ConversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findFirstOrThrow
   */
  export type ConversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findMany
   */
  export type ConversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations create
   */
  export type ConversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversations.
     */
    data: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
  }

  /**
   * Conversations createMany
   */
  export type ConversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversations createManyAndReturn
   */
  export type ConversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversations update
   */
  export type ConversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversations.
     */
    data: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
    /**
     * Choose, which Conversations to update.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations updateMany
   */
  export type ConversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationsWhereInput
  }

  /**
   * Conversations upsert
   */
  export type ConversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversations to update in case it exists.
     */
    where: ConversationsWhereUniqueInput
    /**
     * In case the Conversations found by the `where` argument doesn't exist, create a new Conversations with this data.
     */
    create: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
    /**
     * In case the Conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
  }

  /**
   * Conversations delete
   */
  export type ConversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter which Conversations to delete.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations deleteMany
   */
  export type ConversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationsWhereInput
  }

  /**
   * Conversations.messages
   */
  export type Conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Conversations.lastMessage
   */
  export type Conversations$lastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
  }

  /**
   * Conversations.Messages
   */
  export type Conversations$MessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Conversations without action
   */
  export type ConversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    phoneNumberId: string | null
    contactWaId: string | null
    type: string | null
    textBody: string | null
    mediaId: string | null
    mediaMimeType: string | null
    mediaUrl: string | null
    caption: string | null
    isFromUs: boolean | null
    status: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    phoneNumberId: string | null
    contactWaId: string | null
    type: string | null
    textBody: string | null
    mediaId: string | null
    mediaMimeType: string | null
    mediaUrl: string | null
    caption: string | null
    isFromUs: boolean | null
    status: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    conversationId: number
    phoneNumberId: number
    contactWaId: number
    type: number
    textBody: number
    mediaId: number
    mediaMimeType: number
    mediaUrl: number
    caption: number
    location: number
    isFromUs: number
    status: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    conversationId?: true
    phoneNumberId?: true
    contactWaId?: true
    type?: true
    textBody?: true
    mediaId?: true
    mediaMimeType?: true
    mediaUrl?: true
    caption?: true
    isFromUs?: true
    status?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    conversationId?: true
    phoneNumberId?: true
    contactWaId?: true
    type?: true
    textBody?: true
    mediaId?: true
    mediaMimeType?: true
    mediaUrl?: true
    caption?: true
    isFromUs?: true
    status?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    conversationId?: true
    phoneNumberId?: true
    contactWaId?: true
    type?: true
    textBody?: true
    mediaId?: true
    mediaMimeType?: true
    mediaUrl?: true
    caption?: true
    location?: true
    isFromUs?: true
    status?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    conversationId: string
    phoneNumberId: string
    contactWaId: string
    type: string
    textBody: string | null
    mediaId: string | null
    mediaMimeType: string | null
    mediaUrl: string | null
    caption: string | null
    location: JsonValue | null
    isFromUs: boolean
    status: string
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    phoneNumberId?: boolean
    contactWaId?: boolean
    type?: boolean
    textBody?: boolean
    mediaId?: boolean
    mediaMimeType?: boolean
    mediaUrl?: boolean
    caption?: boolean
    location?: boolean
    isFromUs?: boolean
    status?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
    Conversations?: boolean | Messages$ConversationsArgs<ExtArgs>
    ConversationsLastMessage?: boolean | Messages$ConversationsLastMessageArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    phoneNumberId?: boolean
    contactWaId?: boolean
    type?: boolean
    textBody?: boolean
    mediaId?: boolean
    mediaMimeType?: boolean
    mediaUrl?: boolean
    caption?: boolean
    location?: boolean
    isFromUs?: boolean
    status?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>


  export type MessagesSelectScalar = {
    id?: boolean
    conversationId?: boolean
    phoneNumberId?: boolean
    contactWaId?: boolean
    type?: boolean
    textBody?: boolean
    mediaId?: boolean
    mediaMimeType?: boolean
    mediaUrl?: boolean
    caption?: boolean
    location?: boolean
    isFromUs?: boolean
    status?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "phoneNumberId" | "contactWaId" | "type" | "textBody" | "mediaId" | "mediaMimeType" | "mediaUrl" | "caption" | "location" | "isFromUs" | "status" | "timestamp" | "createdAt" | "updatedAt", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
    Conversations?: boolean | Messages$ConversationsArgs<ExtArgs>
    ConversationsLastMessage?: boolean | Messages$ConversationsLastMessageArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
    phoneNumber?: boolean | PhoneNumbersDefaultArgs<ExtArgs>
    contact?: boolean | ContactsDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      conversation: Prisma.$ConversationsPayload<ExtArgs>
      phoneNumber: Prisma.$PhoneNumbersPayload<ExtArgs>
      contact: Prisma.$ContactsPayload<ExtArgs>
      Conversations: Prisma.$ConversationsPayload<ExtArgs>[]
      ConversationsLastMessage: Prisma.$ConversationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      phoneNumberId: string
      contactWaId: string
      type: string
      textBody: string | null
      mediaId: string | null
      mediaMimeType: string | null
      mediaUrl: string | null
      caption: string | null
      location: Prisma.JsonValue | null
      isFromUs: boolean
      status: string
      timestamp: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    phoneNumber<T extends PhoneNumbersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhoneNumbersDefaultArgs<ExtArgs>>): Prisma__PhoneNumbersClient<$Result.GetResult<Prisma.$PhoneNumbersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contact<T extends ContactsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactsDefaultArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Conversations<T extends Messages$ConversationsArgs<ExtArgs> = {}>(args?: Subset<T, Messages$ConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ConversationsLastMessage<T extends Messages$ConversationsLastMessageArgs<ExtArgs> = {}>(args?: Subset<T, Messages$ConversationsLastMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'String'>
    readonly conversationId: FieldRef<"Messages", 'String'>
    readonly phoneNumberId: FieldRef<"Messages", 'String'>
    readonly contactWaId: FieldRef<"Messages", 'String'>
    readonly type: FieldRef<"Messages", 'String'>
    readonly textBody: FieldRef<"Messages", 'String'>
    readonly mediaId: FieldRef<"Messages", 'String'>
    readonly mediaMimeType: FieldRef<"Messages", 'String'>
    readonly mediaUrl: FieldRef<"Messages", 'String'>
    readonly caption: FieldRef<"Messages", 'String'>
    readonly location: FieldRef<"Messages", 'Json'>
    readonly isFromUs: FieldRef<"Messages", 'Boolean'>
    readonly status: FieldRef<"Messages", 'String'>
    readonly timestamp: FieldRef<"Messages", 'DateTime'>
    readonly createdAt: FieldRef<"Messages", 'DateTime'>
    readonly updatedAt: FieldRef<"Messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
  }

  /**
   * Messages.Conversations
   */
  export type Messages$ConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Messages.ConversationsLastMessage
   */
  export type Messages$ConversationsLastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PhoneNumbersScalarFieldEnum: {
    id: 'id',
    displayPhoneNumber: 'displayPhoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneNumbersScalarFieldEnum = (typeof PhoneNumbersScalarFieldEnum)[keyof typeof PhoneNumbersScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    waId: 'waId',
    profileName: 'profileName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    phoneNumberId: 'phoneNumberId',
    contactWaId: 'contactWaId',
    lastMessageId: 'lastMessageId',
    lastMessageAt: 'lastMessageAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    phoneNumberId: 'phoneNumberId',
    contactWaId: 'contactWaId',
    type: 'type',
    textBody: 'textBody',
    mediaId: 'mediaId',
    mediaMimeType: 'mediaMimeType',
    mediaUrl: 'mediaUrl',
    caption: 'caption',
    location: 'location',
    isFromUs: 'isFromUs',
    status: 'status',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PhoneNumbersWhereInput = {
    AND?: PhoneNumbersWhereInput | PhoneNumbersWhereInput[]
    OR?: PhoneNumbersWhereInput[]
    NOT?: PhoneNumbersWhereInput | PhoneNumbersWhereInput[]
    id?: StringFilter<"PhoneNumbers"> | string
    displayPhoneNumber?: StringFilter<"PhoneNumbers"> | string
    createdAt?: DateTimeFilter<"PhoneNumbers"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneNumbers"> | Date | string
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type PhoneNumbersOrderByWithRelationInput = {
    id?: SortOrder
    displayPhoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversations?: ConversationsOrderByRelationAggregateInput
    messages?: MessagesOrderByRelationAggregateInput
  }

  export type PhoneNumbersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    displayPhoneNumber?: string
    AND?: PhoneNumbersWhereInput | PhoneNumbersWhereInput[]
    OR?: PhoneNumbersWhereInput[]
    NOT?: PhoneNumbersWhereInput | PhoneNumbersWhereInput[]
    createdAt?: DateTimeFilter<"PhoneNumbers"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneNumbers"> | Date | string
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id" | "displayPhoneNumber">

  export type PhoneNumbersOrderByWithAggregationInput = {
    id?: SortOrder
    displayPhoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneNumbersCountOrderByAggregateInput
    _max?: PhoneNumbersMaxOrderByAggregateInput
    _min?: PhoneNumbersMinOrderByAggregateInput
  }

  export type PhoneNumbersScalarWhereWithAggregatesInput = {
    AND?: PhoneNumbersScalarWhereWithAggregatesInput | PhoneNumbersScalarWhereWithAggregatesInput[]
    OR?: PhoneNumbersScalarWhereWithAggregatesInput[]
    NOT?: PhoneNumbersScalarWhereWithAggregatesInput | PhoneNumbersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhoneNumbers"> | string
    displayPhoneNumber?: StringWithAggregatesFilter<"PhoneNumbers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhoneNumbers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneNumbers"> | Date | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    waId?: StringFilter<"Contacts"> | string
    profileName?: StringNullableFilter<"Contacts"> | string | null
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type ContactsOrderByWithRelationInput = {
    waId?: SortOrder
    profileName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversations?: ConversationsOrderByRelationAggregateInput
    messages?: MessagesOrderByRelationAggregateInput
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    waId?: string
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    profileName?: StringNullableFilter<"Contacts"> | string | null
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
  }, "waId">

  export type ContactsOrderByWithAggregationInput = {
    waId?: SortOrder
    profileName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    waId?: StringWithAggregatesFilter<"Contacts"> | string
    profileName?: StringNullableWithAggregatesFilter<"Contacts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
  }

  export type ConversationsWhereInput = {
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    id?: StringFilter<"Conversations"> | string
    phoneNumberId?: StringFilter<"Conversations"> | string
    contactWaId?: StringFilter<"Conversations"> | string
    lastMessageId?: StringNullableFilter<"Conversations"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Conversations"> | Date | string | null
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
    phoneNumber?: XOR<PhoneNumbersRelationFilter, PhoneNumbersWhereInput>
    contact?: XOR<ContactsRelationFilter, ContactsWhereInput>
    messages?: MessagesListRelationFilter
    lastMessage?: XOR<MessagesNullableRelationFilter, MessagesWhereInput> | null
    Messages?: MessagesListRelationFilter
  }

  export type ConversationsOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phoneNumber?: PhoneNumbersOrderByWithRelationInput
    contact?: ContactsOrderByWithRelationInput
    messages?: MessagesOrderByRelationAggregateInput
    lastMessage?: MessagesOrderByWithRelationInput
    Messages?: MessagesOrderByRelationAggregateInput
  }

  export type ConversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumberId_contactWaId?: ConversationsPhoneNumberIdContactWaIdCompoundUniqueInput
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    phoneNumberId?: StringFilter<"Conversations"> | string
    contactWaId?: StringFilter<"Conversations"> | string
    lastMessageId?: StringNullableFilter<"Conversations"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Conversations"> | Date | string | null
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
    phoneNumber?: XOR<PhoneNumbersRelationFilter, PhoneNumbersWhereInput>
    contact?: XOR<ContactsRelationFilter, ContactsWhereInput>
    messages?: MessagesListRelationFilter
    lastMessage?: XOR<MessagesNullableRelationFilter, MessagesWhereInput> | null
    Messages?: MessagesListRelationFilter
  }, "id" | "phoneNumberId_contactWaId">

  export type ConversationsOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationsCountOrderByAggregateInput
    _max?: ConversationsMaxOrderByAggregateInput
    _min?: ConversationsMinOrderByAggregateInput
  }

  export type ConversationsScalarWhereWithAggregatesInput = {
    AND?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    OR?: ConversationsScalarWhereWithAggregatesInput[]
    NOT?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversations"> | string
    phoneNumberId?: StringWithAggregatesFilter<"Conversations"> | string
    contactWaId?: StringWithAggregatesFilter<"Conversations"> | string
    lastMessageId?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    lastMessageAt?: DateTimeNullableWithAggregatesFilter<"Conversations"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversations"> | Date | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: StringFilter<"Messages"> | string
    conversationId?: StringFilter<"Messages"> | string
    phoneNumberId?: StringFilter<"Messages"> | string
    contactWaId?: StringFilter<"Messages"> | string
    type?: StringFilter<"Messages"> | string
    textBody?: StringNullableFilter<"Messages"> | string | null
    mediaId?: StringNullableFilter<"Messages"> | string | null
    mediaMimeType?: StringNullableFilter<"Messages"> | string | null
    mediaUrl?: StringNullableFilter<"Messages"> | string | null
    caption?: StringNullableFilter<"Messages"> | string | null
    location?: JsonNullableFilter<"Messages">
    isFromUs?: BoolFilter<"Messages"> | boolean
    status?: StringFilter<"Messages"> | string
    timestamp?: DateTimeFilter<"Messages"> | Date | string
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
    conversation?: XOR<ConversationsRelationFilter, ConversationsWhereInput>
    phoneNumber?: XOR<PhoneNumbersRelationFilter, PhoneNumbersWhereInput>
    contact?: XOR<ContactsRelationFilter, ContactsWhereInput>
    Conversations?: ConversationsListRelationFilter
    ConversationsLastMessage?: ConversationsListRelationFilter
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    type?: SortOrder
    textBody?: SortOrderInput | SortOrder
    mediaId?: SortOrderInput | SortOrder
    mediaMimeType?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    isFromUs?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversation?: ConversationsOrderByWithRelationInput
    phoneNumber?: PhoneNumbersOrderByWithRelationInput
    contact?: ContactsOrderByWithRelationInput
    Conversations?: ConversationsOrderByRelationAggregateInput
    ConversationsLastMessage?: ConversationsOrderByRelationAggregateInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    conversationId?: StringFilter<"Messages"> | string
    phoneNumberId?: StringFilter<"Messages"> | string
    contactWaId?: StringFilter<"Messages"> | string
    type?: StringFilter<"Messages"> | string
    textBody?: StringNullableFilter<"Messages"> | string | null
    mediaId?: StringNullableFilter<"Messages"> | string | null
    mediaMimeType?: StringNullableFilter<"Messages"> | string | null
    mediaUrl?: StringNullableFilter<"Messages"> | string | null
    caption?: StringNullableFilter<"Messages"> | string | null
    location?: JsonNullableFilter<"Messages">
    isFromUs?: BoolFilter<"Messages"> | boolean
    status?: StringFilter<"Messages"> | string
    timestamp?: DateTimeFilter<"Messages"> | Date | string
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
    conversation?: XOR<ConversationsRelationFilter, ConversationsWhereInput>
    phoneNumber?: XOR<PhoneNumbersRelationFilter, PhoneNumbersWhereInput>
    contact?: XOR<ContactsRelationFilter, ContactsWhereInput>
    Conversations?: ConversationsListRelationFilter
    ConversationsLastMessage?: ConversationsListRelationFilter
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    type?: SortOrder
    textBody?: SortOrderInput | SortOrder
    mediaId?: SortOrderInput | SortOrder
    mediaMimeType?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    isFromUs?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Messages"> | string
    conversationId?: StringWithAggregatesFilter<"Messages"> | string
    phoneNumberId?: StringWithAggregatesFilter<"Messages"> | string
    contactWaId?: StringWithAggregatesFilter<"Messages"> | string
    type?: StringWithAggregatesFilter<"Messages"> | string
    textBody?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    mediaId?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    mediaMimeType?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    caption?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    location?: JsonNullableWithAggregatesFilter<"Messages">
    isFromUs?: BoolWithAggregatesFilter<"Messages"> | boolean
    status?: StringWithAggregatesFilter<"Messages"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
  }

  export type PhoneNumbersCreateInput = {
    id: string
    displayPhoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutPhoneNumberInput
    messages?: MessagesCreateNestedManyWithoutPhoneNumberInput
  }

  export type PhoneNumbersUncheckedCreateInput = {
    id: string
    displayPhoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutPhoneNumberInput
    messages?: MessagesUncheckedCreateNestedManyWithoutPhoneNumberInput
  }

  export type PhoneNumbersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutPhoneNumberNestedInput
    messages?: MessagesUpdateManyWithoutPhoneNumberNestedInput
  }

  export type PhoneNumbersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutPhoneNumberNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutPhoneNumberNestedInput
  }

  export type PhoneNumbersCreateManyInput = {
    id: string
    displayPhoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneNumbersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneNumbersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateInput = {
    waId: string
    profileName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutContactInput
    messages?: MessagesCreateNestedManyWithoutContactInput
  }

  export type ContactsUncheckedCreateInput = {
    waId: string
    profileName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutContactInput
    messages?: MessagesUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactsUpdateInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutContactNestedInput
    messages?: MessagesUpdateManyWithoutContactNestedInput
  }

  export type ContactsUncheckedUpdateInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutContactNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactsCreateManyInput = {
    waId: string
    profileName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateManyMutationInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsCreateInput = {
    id?: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumber: PhoneNumbersCreateNestedOneWithoutConversationsInput
    contact: ContactsCreateNestedOneWithoutConversationsInput
    messages?: MessagesCreateNestedManyWithoutConversationsInput
    lastMessage?: MessagesCreateNestedOneWithoutConversationsLastMessageInput
    Messages?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateInput = {
    id?: string
    phoneNumberId: string
    contactWaId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationsInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutConversationsNestedInput
    contact?: ContactsUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessagesUpdateManyWithoutConversationsNestedInput
    lastMessage?: MessagesUpdateOneWithoutConversationsLastMessageNestedInput
    Messages?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutConversationsNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsCreateManyInput = {
    id?: string
    phoneNumberId: string
    contactWaId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateInput = {
    id: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessagesInput
    phoneNumber: PhoneNumbersCreateNestedOneWithoutMessagesInput
    contact: ContactsCreateNestedOneWithoutMessagesInput
    Conversations?: ConversationsCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesUncheckedCreateInput = {
    id: string
    conversationId: string
    phoneNumberId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Conversations?: ConversationsUncheckedCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessagesNestedInput
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutMessagesNestedInput
    contact?: ContactsUpdateOneRequiredWithoutMessagesNestedInput
    Conversations?: ConversationsUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Conversations?: ConversationsUncheckedUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesCreateManyInput = {
    id: string
    conversationId: string
    phoneNumberId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConversationsListRelationFilter = {
    every?: ConversationsWhereInput
    some?: ConversationsWhereInput
    none?: ConversationsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type ConversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhoneNumbersCountOrderByAggregateInput = {
    id?: SortOrder
    displayPhoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneNumbersMaxOrderByAggregateInput = {
    id?: SortOrder
    displayPhoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneNumbersMinOrderByAggregateInput = {
    id?: SortOrder
    displayPhoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactsCountOrderByAggregateInput = {
    waId?: SortOrder
    profileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    waId?: SortOrder
    profileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    waId?: SortOrder
    profileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PhoneNumbersRelationFilter = {
    is?: PhoneNumbersWhereInput
    isNot?: PhoneNumbersWhereInput
  }

  export type ContactsRelationFilter = {
    is?: ContactsWhereInput
    isNot?: ContactsWhereInput
  }

  export type MessagesNullableRelationFilter = {
    is?: MessagesWhereInput | null
    isNot?: MessagesWhereInput | null
  }

  export type ConversationsPhoneNumberIdContactWaIdCompoundUniqueInput = {
    phoneNumberId: string
    contactWaId: string
  }

  export type ConversationsCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    lastMessageId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    lastMessageId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationsMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    lastMessageId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConversationsRelationFilter = {
    is?: ConversationsWhereInput
    isNot?: ConversationsWhereInput
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    type?: SortOrder
    textBody?: SortOrder
    mediaId?: SortOrder
    mediaMimeType?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    isFromUs?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    type?: SortOrder
    textBody?: SortOrder
    mediaId?: SortOrder
    mediaMimeType?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrder
    isFromUs?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    phoneNumberId?: SortOrder
    contactWaId?: SortOrder
    type?: SortOrder
    textBody?: SortOrder
    mediaId?: SortOrder
    mediaMimeType?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrder
    isFromUs?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConversationsCreateNestedManyWithoutPhoneNumberInput = {
    create?: XOR<ConversationsCreateWithoutPhoneNumberInput, ConversationsUncheckedCreateWithoutPhoneNumberInput> | ConversationsCreateWithoutPhoneNumberInput[] | ConversationsUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutPhoneNumberInput | ConversationsCreateOrConnectWithoutPhoneNumberInput[]
    createMany?: ConversationsCreateManyPhoneNumberInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutPhoneNumberInput = {
    create?: XOR<MessagesCreateWithoutPhoneNumberInput, MessagesUncheckedCreateWithoutPhoneNumberInput> | MessagesCreateWithoutPhoneNumberInput[] | MessagesUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutPhoneNumberInput | MessagesCreateOrConnectWithoutPhoneNumberInput[]
    createMany?: MessagesCreateManyPhoneNumberInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutPhoneNumberInput = {
    create?: XOR<ConversationsCreateWithoutPhoneNumberInput, ConversationsUncheckedCreateWithoutPhoneNumberInput> | ConversationsCreateWithoutPhoneNumberInput[] | ConversationsUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutPhoneNumberInput | ConversationsCreateOrConnectWithoutPhoneNumberInput[]
    createMany?: ConversationsCreateManyPhoneNumberInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutPhoneNumberInput = {
    create?: XOR<MessagesCreateWithoutPhoneNumberInput, MessagesUncheckedCreateWithoutPhoneNumberInput> | MessagesCreateWithoutPhoneNumberInput[] | MessagesUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutPhoneNumberInput | MessagesCreateOrConnectWithoutPhoneNumberInput[]
    createMany?: MessagesCreateManyPhoneNumberInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConversationsUpdateManyWithoutPhoneNumberNestedInput = {
    create?: XOR<ConversationsCreateWithoutPhoneNumberInput, ConversationsUncheckedCreateWithoutPhoneNumberInput> | ConversationsCreateWithoutPhoneNumberInput[] | ConversationsUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutPhoneNumberInput | ConversationsCreateOrConnectWithoutPhoneNumberInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutPhoneNumberInput | ConversationsUpsertWithWhereUniqueWithoutPhoneNumberInput[]
    createMany?: ConversationsCreateManyPhoneNumberInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutPhoneNumberInput | ConversationsUpdateWithWhereUniqueWithoutPhoneNumberInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutPhoneNumberInput | ConversationsUpdateManyWithWhereWithoutPhoneNumberInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutPhoneNumberNestedInput = {
    create?: XOR<MessagesCreateWithoutPhoneNumberInput, MessagesUncheckedCreateWithoutPhoneNumberInput> | MessagesCreateWithoutPhoneNumberInput[] | MessagesUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutPhoneNumberInput | MessagesCreateOrConnectWithoutPhoneNumberInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutPhoneNumberInput | MessagesUpsertWithWhereUniqueWithoutPhoneNumberInput[]
    createMany?: MessagesCreateManyPhoneNumberInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutPhoneNumberInput | MessagesUpdateWithWhereUniqueWithoutPhoneNumberInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutPhoneNumberInput | MessagesUpdateManyWithWhereWithoutPhoneNumberInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutPhoneNumberNestedInput = {
    create?: XOR<ConversationsCreateWithoutPhoneNumberInput, ConversationsUncheckedCreateWithoutPhoneNumberInput> | ConversationsCreateWithoutPhoneNumberInput[] | ConversationsUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutPhoneNumberInput | ConversationsCreateOrConnectWithoutPhoneNumberInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutPhoneNumberInput | ConversationsUpsertWithWhereUniqueWithoutPhoneNumberInput[]
    createMany?: ConversationsCreateManyPhoneNumberInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutPhoneNumberInput | ConversationsUpdateWithWhereUniqueWithoutPhoneNumberInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutPhoneNumberInput | ConversationsUpdateManyWithWhereWithoutPhoneNumberInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutPhoneNumberNestedInput = {
    create?: XOR<MessagesCreateWithoutPhoneNumberInput, MessagesUncheckedCreateWithoutPhoneNumberInput> | MessagesCreateWithoutPhoneNumberInput[] | MessagesUncheckedCreateWithoutPhoneNumberInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutPhoneNumberInput | MessagesCreateOrConnectWithoutPhoneNumberInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutPhoneNumberInput | MessagesUpsertWithWhereUniqueWithoutPhoneNumberInput[]
    createMany?: MessagesCreateManyPhoneNumberInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutPhoneNumberInput | MessagesUpdateWithWhereUniqueWithoutPhoneNumberInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutPhoneNumberInput | MessagesUpdateManyWithWhereWithoutPhoneNumberInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ConversationsCreateNestedManyWithoutContactInput = {
    create?: XOR<ConversationsCreateWithoutContactInput, ConversationsUncheckedCreateWithoutContactInput> | ConversationsCreateWithoutContactInput[] | ConversationsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutContactInput | ConversationsCreateOrConnectWithoutContactInput[]
    createMany?: ConversationsCreateManyContactInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutContactInput = {
    create?: XOR<MessagesCreateWithoutContactInput, MessagesUncheckedCreateWithoutContactInput> | MessagesCreateWithoutContactInput[] | MessagesUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutContactInput | MessagesCreateOrConnectWithoutContactInput[]
    createMany?: MessagesCreateManyContactInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<ConversationsCreateWithoutContactInput, ConversationsUncheckedCreateWithoutContactInput> | ConversationsCreateWithoutContactInput[] | ConversationsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutContactInput | ConversationsCreateOrConnectWithoutContactInput[]
    createMany?: ConversationsCreateManyContactInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<MessagesCreateWithoutContactInput, MessagesUncheckedCreateWithoutContactInput> | MessagesCreateWithoutContactInput[] | MessagesUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutContactInput | MessagesCreateOrConnectWithoutContactInput[]
    createMany?: MessagesCreateManyContactInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ConversationsUpdateManyWithoutContactNestedInput = {
    create?: XOR<ConversationsCreateWithoutContactInput, ConversationsUncheckedCreateWithoutContactInput> | ConversationsCreateWithoutContactInput[] | ConversationsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutContactInput | ConversationsCreateOrConnectWithoutContactInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutContactInput | ConversationsUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ConversationsCreateManyContactInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutContactInput | ConversationsUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutContactInput | ConversationsUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutContactNestedInput = {
    create?: XOR<MessagesCreateWithoutContactInput, MessagesUncheckedCreateWithoutContactInput> | MessagesCreateWithoutContactInput[] | MessagesUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutContactInput | MessagesCreateOrConnectWithoutContactInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutContactInput | MessagesUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: MessagesCreateManyContactInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutContactInput | MessagesUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutContactInput | MessagesUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<ConversationsCreateWithoutContactInput, ConversationsUncheckedCreateWithoutContactInput> | ConversationsCreateWithoutContactInput[] | ConversationsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutContactInput | ConversationsCreateOrConnectWithoutContactInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutContactInput | ConversationsUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ConversationsCreateManyContactInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutContactInput | ConversationsUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutContactInput | ConversationsUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<MessagesCreateWithoutContactInput, MessagesUncheckedCreateWithoutContactInput> | MessagesCreateWithoutContactInput[] | MessagesUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutContactInput | MessagesCreateOrConnectWithoutContactInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutContactInput | MessagesUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: MessagesCreateManyContactInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutContactInput | MessagesUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutContactInput | MessagesUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type PhoneNumbersCreateNestedOneWithoutConversationsInput = {
    create?: XOR<PhoneNumbersCreateWithoutConversationsInput, PhoneNumbersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PhoneNumbersCreateOrConnectWithoutConversationsInput
    connect?: PhoneNumbersWhereUniqueInput
  }

  export type ContactsCreateNestedOneWithoutConversationsInput = {
    create?: XOR<ContactsCreateWithoutConversationsInput, ContactsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutConversationsInput
    connect?: ContactsWhereUniqueInput
  }

  export type MessagesCreateNestedManyWithoutConversationsInput = {
    create?: XOR<MessagesCreateWithoutConversationsInput, MessagesUncheckedCreateWithoutConversationsInput> | MessagesCreateWithoutConversationsInput[] | MessagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationsInput | MessagesCreateOrConnectWithoutConversationsInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesCreateNestedOneWithoutConversationsLastMessageInput = {
    create?: XOR<MessagesCreateWithoutConversationsLastMessageInput, MessagesUncheckedCreateWithoutConversationsLastMessageInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationsLastMessageInput
    connect?: MessagesWhereUniqueInput
  }

  export type MessagesCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<MessagesCreateWithoutConversationsInput, MessagesUncheckedCreateWithoutConversationsInput> | MessagesCreateWithoutConversationsInput[] | MessagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationsInput | MessagesCreateOrConnectWithoutConversationsInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PhoneNumbersUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<PhoneNumbersCreateWithoutConversationsInput, PhoneNumbersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PhoneNumbersCreateOrConnectWithoutConversationsInput
    upsert?: PhoneNumbersUpsertWithoutConversationsInput
    connect?: PhoneNumbersWhereUniqueInput
    update?: XOR<XOR<PhoneNumbersUpdateToOneWithWhereWithoutConversationsInput, PhoneNumbersUpdateWithoutConversationsInput>, PhoneNumbersUncheckedUpdateWithoutConversationsInput>
  }

  export type ContactsUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<ContactsCreateWithoutConversationsInput, ContactsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutConversationsInput
    upsert?: ContactsUpsertWithoutConversationsInput
    connect?: ContactsWhereUniqueInput
    update?: XOR<XOR<ContactsUpdateToOneWithWhereWithoutConversationsInput, ContactsUpdateWithoutConversationsInput>, ContactsUncheckedUpdateWithoutConversationsInput>
  }

  export type MessagesUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationsInput, MessagesUncheckedCreateWithoutConversationsInput> | MessagesCreateWithoutConversationsInput[] | MessagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationsInput | MessagesCreateOrConnectWithoutConversationsInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationsInput | MessagesUpsertWithWhereUniqueWithoutConversationsInput[]
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationsInput | MessagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationsInput | MessagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUpdateOneWithoutConversationsLastMessageNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationsLastMessageInput, MessagesUncheckedCreateWithoutConversationsLastMessageInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationsLastMessageInput
    upsert?: MessagesUpsertWithoutConversationsLastMessageInput
    disconnect?: MessagesWhereInput | boolean
    delete?: MessagesWhereInput | boolean
    connect?: MessagesWhereUniqueInput
    update?: XOR<XOR<MessagesUpdateToOneWithWhereWithoutConversationsLastMessageInput, MessagesUpdateWithoutConversationsLastMessageInput>, MessagesUncheckedUpdateWithoutConversationsLastMessageInput>
  }

  export type MessagesUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationInput | MessagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationInput | MessagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationInput | MessagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationsInput, MessagesUncheckedCreateWithoutConversationsInput> | MessagesCreateWithoutConversationsInput[] | MessagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationsInput | MessagesCreateOrConnectWithoutConversationsInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationsInput | MessagesUpsertWithWhereUniqueWithoutConversationsInput[]
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationsInput | MessagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationsInput | MessagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput> | MessagesCreateWithoutConversationInput[] | MessagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutConversationInput | MessagesCreateOrConnectWithoutConversationInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutConversationInput | MessagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessagesCreateManyConversationInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutConversationInput | MessagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutConversationInput | MessagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ConversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput
    connect?: ConversationsWhereUniqueInput
  }

  export type PhoneNumbersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<PhoneNumbersCreateWithoutMessagesInput, PhoneNumbersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PhoneNumbersCreateOrConnectWithoutMessagesInput
    connect?: PhoneNumbersWhereUniqueInput
  }

  export type ContactsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ContactsCreateWithoutMessagesInput, ContactsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutMessagesInput
    connect?: ContactsWhereUniqueInput
  }

  export type ConversationsCreateNestedManyWithoutMessagesInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput> | ConversationsCreateWithoutMessagesInput[] | ConversationsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput | ConversationsCreateOrConnectWithoutMessagesInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationsCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<ConversationsCreateWithoutLastMessageInput, ConversationsUncheckedCreateWithoutLastMessageInput> | ConversationsCreateWithoutLastMessageInput[] | ConversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutLastMessageInput | ConversationsCreateOrConnectWithoutLastMessageInput[]
    createMany?: ConversationsCreateManyLastMessageInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput> | ConversationsCreateWithoutMessagesInput[] | ConversationsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput | ConversationsCreateOrConnectWithoutMessagesInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<ConversationsCreateWithoutLastMessageInput, ConversationsUncheckedCreateWithoutLastMessageInput> | ConversationsCreateWithoutLastMessageInput[] | ConversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutLastMessageInput | ConversationsCreateOrConnectWithoutLastMessageInput[]
    createMany?: ConversationsCreateManyLastMessageInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput
    upsert?: ConversationsUpsertWithoutMessagesInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutMessagesInput, ConversationsUpdateWithoutMessagesInput>, ConversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type PhoneNumbersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<PhoneNumbersCreateWithoutMessagesInput, PhoneNumbersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PhoneNumbersCreateOrConnectWithoutMessagesInput
    upsert?: PhoneNumbersUpsertWithoutMessagesInput
    connect?: PhoneNumbersWhereUniqueInput
    update?: XOR<XOR<PhoneNumbersUpdateToOneWithWhereWithoutMessagesInput, PhoneNumbersUpdateWithoutMessagesInput>, PhoneNumbersUncheckedUpdateWithoutMessagesInput>
  }

  export type ContactsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ContactsCreateWithoutMessagesInput, ContactsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ContactsCreateOrConnectWithoutMessagesInput
    upsert?: ContactsUpsertWithoutMessagesInput
    connect?: ContactsWhereUniqueInput
    update?: XOR<XOR<ContactsUpdateToOneWithWhereWithoutMessagesInput, ContactsUpdateWithoutMessagesInput>, ContactsUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationsUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput> | ConversationsCreateWithoutMessagesInput[] | ConversationsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput | ConversationsCreateOrConnectWithoutMessagesInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutMessagesInput | ConversationsUpsertWithWhereUniqueWithoutMessagesInput[]
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutMessagesInput | ConversationsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutMessagesInput | ConversationsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationsUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<ConversationsCreateWithoutLastMessageInput, ConversationsUncheckedCreateWithoutLastMessageInput> | ConversationsCreateWithoutLastMessageInput[] | ConversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutLastMessageInput | ConversationsCreateOrConnectWithoutLastMessageInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutLastMessageInput | ConversationsUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: ConversationsCreateManyLastMessageInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutLastMessageInput | ConversationsUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutLastMessageInput | ConversationsUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput> | ConversationsCreateWithoutMessagesInput[] | ConversationsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessagesInput | ConversationsCreateOrConnectWithoutMessagesInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutMessagesInput | ConversationsUpsertWithWhereUniqueWithoutMessagesInput[]
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutMessagesInput | ConversationsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutMessagesInput | ConversationsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<ConversationsCreateWithoutLastMessageInput, ConversationsUncheckedCreateWithoutLastMessageInput> | ConversationsCreateWithoutLastMessageInput[] | ConversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutLastMessageInput | ConversationsCreateOrConnectWithoutLastMessageInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutLastMessageInput | ConversationsUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: ConversationsCreateManyLastMessageInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutLastMessageInput | ConversationsUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutLastMessageInput | ConversationsUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConversationsCreateWithoutPhoneNumberInput = {
    id?: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact: ContactsCreateNestedOneWithoutConversationsInput
    messages?: MessagesCreateNestedManyWithoutConversationsInput
    lastMessage?: MessagesCreateNestedOneWithoutConversationsLastMessageInput
    Messages?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutPhoneNumberInput = {
    id?: string
    contactWaId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationsInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutPhoneNumberInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutPhoneNumberInput, ConversationsUncheckedCreateWithoutPhoneNumberInput>
  }

  export type ConversationsCreateManyPhoneNumberInputEnvelope = {
    data: ConversationsCreateManyPhoneNumberInput | ConversationsCreateManyPhoneNumberInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutPhoneNumberInput = {
    id: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessagesInput
    contact: ContactsCreateNestedOneWithoutMessagesInput
    Conversations?: ConversationsCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesUncheckedCreateWithoutPhoneNumberInput = {
    id: string
    conversationId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Conversations?: ConversationsUncheckedCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesCreateOrConnectWithoutPhoneNumberInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutPhoneNumberInput, MessagesUncheckedCreateWithoutPhoneNumberInput>
  }

  export type MessagesCreateManyPhoneNumberInputEnvelope = {
    data: MessagesCreateManyPhoneNumberInput | MessagesCreateManyPhoneNumberInput[]
    skipDuplicates?: boolean
  }

  export type ConversationsUpsertWithWhereUniqueWithoutPhoneNumberInput = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutPhoneNumberInput, ConversationsUncheckedUpdateWithoutPhoneNumberInput>
    create: XOR<ConversationsCreateWithoutPhoneNumberInput, ConversationsUncheckedCreateWithoutPhoneNumberInput>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutPhoneNumberInput = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutPhoneNumberInput, ConversationsUncheckedUpdateWithoutPhoneNumberInput>
  }

  export type ConversationsUpdateManyWithWhereWithoutPhoneNumberInput = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutPhoneNumberInput>
  }

  export type ConversationsScalarWhereInput = {
    AND?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    OR?: ConversationsScalarWhereInput[]
    NOT?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    id?: StringFilter<"Conversations"> | string
    phoneNumberId?: StringFilter<"Conversations"> | string
    contactWaId?: StringFilter<"Conversations"> | string
    lastMessageId?: StringNullableFilter<"Conversations"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Conversations"> | Date | string | null
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutPhoneNumberInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutPhoneNumberInput, MessagesUncheckedUpdateWithoutPhoneNumberInput>
    create: XOR<MessagesCreateWithoutPhoneNumberInput, MessagesUncheckedCreateWithoutPhoneNumberInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutPhoneNumberInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutPhoneNumberInput, MessagesUncheckedUpdateWithoutPhoneNumberInput>
  }

  export type MessagesUpdateManyWithWhereWithoutPhoneNumberInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutPhoneNumberInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: StringFilter<"Messages"> | string
    conversationId?: StringFilter<"Messages"> | string
    phoneNumberId?: StringFilter<"Messages"> | string
    contactWaId?: StringFilter<"Messages"> | string
    type?: StringFilter<"Messages"> | string
    textBody?: StringNullableFilter<"Messages"> | string | null
    mediaId?: StringNullableFilter<"Messages"> | string | null
    mediaMimeType?: StringNullableFilter<"Messages"> | string | null
    mediaUrl?: StringNullableFilter<"Messages"> | string | null
    caption?: StringNullableFilter<"Messages"> | string | null
    location?: JsonNullableFilter<"Messages">
    isFromUs?: BoolFilter<"Messages"> | boolean
    status?: StringFilter<"Messages"> | string
    timestamp?: DateTimeFilter<"Messages"> | Date | string
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
  }

  export type ConversationsCreateWithoutContactInput = {
    id?: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumber: PhoneNumbersCreateNestedOneWithoutConversationsInput
    messages?: MessagesCreateNestedManyWithoutConversationsInput
    lastMessage?: MessagesCreateNestedOneWithoutConversationsLastMessageInput
    Messages?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutContactInput = {
    id?: string
    phoneNumberId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationsInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutContactInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutContactInput, ConversationsUncheckedCreateWithoutContactInput>
  }

  export type ConversationsCreateManyContactInputEnvelope = {
    data: ConversationsCreateManyContactInput | ConversationsCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutContactInput = {
    id: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessagesInput
    phoneNumber: PhoneNumbersCreateNestedOneWithoutMessagesInput
    Conversations?: ConversationsCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesUncheckedCreateWithoutContactInput = {
    id: string
    conversationId: string
    phoneNumberId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Conversations?: ConversationsUncheckedCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesCreateOrConnectWithoutContactInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutContactInput, MessagesUncheckedCreateWithoutContactInput>
  }

  export type MessagesCreateManyContactInputEnvelope = {
    data: MessagesCreateManyContactInput | MessagesCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type ConversationsUpsertWithWhereUniqueWithoutContactInput = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutContactInput, ConversationsUncheckedUpdateWithoutContactInput>
    create: XOR<ConversationsCreateWithoutContactInput, ConversationsUncheckedCreateWithoutContactInput>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutContactInput = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutContactInput, ConversationsUncheckedUpdateWithoutContactInput>
  }

  export type ConversationsUpdateManyWithWhereWithoutContactInput = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutContactInput>
  }

  export type MessagesUpsertWithWhereUniqueWithoutContactInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutContactInput, MessagesUncheckedUpdateWithoutContactInput>
    create: XOR<MessagesCreateWithoutContactInput, MessagesUncheckedCreateWithoutContactInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutContactInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutContactInput, MessagesUncheckedUpdateWithoutContactInput>
  }

  export type MessagesUpdateManyWithWhereWithoutContactInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutContactInput>
  }

  export type PhoneNumbersCreateWithoutConversationsInput = {
    id: string
    displayPhoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesCreateNestedManyWithoutPhoneNumberInput
  }

  export type PhoneNumbersUncheckedCreateWithoutConversationsInput = {
    id: string
    displayPhoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutPhoneNumberInput
  }

  export type PhoneNumbersCreateOrConnectWithoutConversationsInput = {
    where: PhoneNumbersWhereUniqueInput
    create: XOR<PhoneNumbersCreateWithoutConversationsInput, PhoneNumbersUncheckedCreateWithoutConversationsInput>
  }

  export type ContactsCreateWithoutConversationsInput = {
    waId: string
    profileName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesCreateNestedManyWithoutContactInput
  }

  export type ContactsUncheckedCreateWithoutConversationsInput = {
    waId: string
    profileName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactsCreateOrConnectWithoutConversationsInput = {
    where: ContactsWhereUniqueInput
    create: XOR<ContactsCreateWithoutConversationsInput, ContactsUncheckedCreateWithoutConversationsInput>
  }

  export type MessagesCreateWithoutConversationsInput = {
    id: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessagesInput
    phoneNumber: PhoneNumbersCreateNestedOneWithoutMessagesInput
    contact: ContactsCreateNestedOneWithoutMessagesInput
    ConversationsLastMessage?: ConversationsCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesUncheckedCreateWithoutConversationsInput = {
    id: string
    conversationId: string
    phoneNumberId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ConversationsLastMessage?: ConversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesCreateOrConnectWithoutConversationsInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutConversationsInput, MessagesUncheckedCreateWithoutConversationsInput>
  }

  export type MessagesCreateWithoutConversationsLastMessageInput = {
    id: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessagesInput
    phoneNumber: PhoneNumbersCreateNestedOneWithoutMessagesInput
    contact: ContactsCreateNestedOneWithoutMessagesInput
    Conversations?: ConversationsCreateNestedManyWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutConversationsLastMessageInput = {
    id: string
    conversationId: string
    phoneNumberId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Conversations?: ConversationsUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessagesCreateOrConnectWithoutConversationsLastMessageInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutConversationsLastMessageInput, MessagesUncheckedCreateWithoutConversationsLastMessageInput>
  }

  export type MessagesCreateWithoutConversationInput = {
    id: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumber: PhoneNumbersCreateNestedOneWithoutMessagesInput
    contact: ContactsCreateNestedOneWithoutMessagesInput
    Conversations?: ConversationsCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesUncheckedCreateWithoutConversationInput = {
    id: string
    phoneNumberId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Conversations?: ConversationsUncheckedCreateNestedManyWithoutMessagesInput
    ConversationsLastMessage?: ConversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessagesCreateOrConnectWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput>
  }

  export type MessagesCreateManyConversationInputEnvelope = {
    data: MessagesCreateManyConversationInput | MessagesCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type PhoneNumbersUpsertWithoutConversationsInput = {
    update: XOR<PhoneNumbersUpdateWithoutConversationsInput, PhoneNumbersUncheckedUpdateWithoutConversationsInput>
    create: XOR<PhoneNumbersCreateWithoutConversationsInput, PhoneNumbersUncheckedCreateWithoutConversationsInput>
    where?: PhoneNumbersWhereInput
  }

  export type PhoneNumbersUpdateToOneWithWhereWithoutConversationsInput = {
    where?: PhoneNumbersWhereInput
    data: XOR<PhoneNumbersUpdateWithoutConversationsInput, PhoneNumbersUncheckedUpdateWithoutConversationsInput>
  }

  export type PhoneNumbersUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUpdateManyWithoutPhoneNumberNestedInput
  }

  export type PhoneNumbersUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutPhoneNumberNestedInput
  }

  export type ContactsUpsertWithoutConversationsInput = {
    update: XOR<ContactsUpdateWithoutConversationsInput, ContactsUncheckedUpdateWithoutConversationsInput>
    create: XOR<ContactsCreateWithoutConversationsInput, ContactsUncheckedCreateWithoutConversationsInput>
    where?: ContactsWhereInput
  }

  export type ContactsUpdateToOneWithWhereWithoutConversationsInput = {
    where?: ContactsWhereInput
    data: XOR<ContactsUpdateWithoutConversationsInput, ContactsUncheckedUpdateWithoutConversationsInput>
  }

  export type ContactsUpdateWithoutConversationsInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUpdateManyWithoutContactNestedInput
  }

  export type ContactsUncheckedUpdateWithoutConversationsInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutContactNestedInput
  }

  export type MessagesUpsertWithWhereUniqueWithoutConversationsInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutConversationsInput, MessagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<MessagesCreateWithoutConversationsInput, MessagesUncheckedCreateWithoutConversationsInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutConversationsInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutConversationsInput, MessagesUncheckedUpdateWithoutConversationsInput>
  }

  export type MessagesUpdateManyWithWhereWithoutConversationsInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutConversationsInput>
  }

  export type MessagesUpsertWithoutConversationsLastMessageInput = {
    update: XOR<MessagesUpdateWithoutConversationsLastMessageInput, MessagesUncheckedUpdateWithoutConversationsLastMessageInput>
    create: XOR<MessagesCreateWithoutConversationsLastMessageInput, MessagesUncheckedCreateWithoutConversationsLastMessageInput>
    where?: MessagesWhereInput
  }

  export type MessagesUpdateToOneWithWhereWithoutConversationsLastMessageInput = {
    where?: MessagesWhereInput
    data: XOR<MessagesUpdateWithoutConversationsLastMessageInput, MessagesUncheckedUpdateWithoutConversationsLastMessageInput>
  }

  export type MessagesUpdateWithoutConversationsLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessagesNestedInput
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutMessagesNestedInput
    contact?: ContactsUpdateOneRequiredWithoutMessagesNestedInput
    Conversations?: ConversationsUpdateManyWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutConversationsLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Conversations?: ConversationsUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessagesUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutConversationInput, MessagesUncheckedUpdateWithoutConversationInput>
    create: XOR<MessagesCreateWithoutConversationInput, MessagesUncheckedCreateWithoutConversationInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutConversationInput, MessagesUncheckedUpdateWithoutConversationInput>
  }

  export type MessagesUpdateManyWithWhereWithoutConversationInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationsCreateWithoutMessagesInput = {
    id?: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumber: PhoneNumbersCreateNestedOneWithoutConversationsInput
    contact: ContactsCreateNestedOneWithoutConversationsInput
    messages?: MessagesCreateNestedManyWithoutConversationsInput
    lastMessage?: MessagesCreateNestedOneWithoutConversationsLastMessageInput
  }

  export type ConversationsUncheckedCreateWithoutMessagesInput = {
    id?: string
    phoneNumberId: string
    contactWaId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type ConversationsCreateOrConnectWithoutMessagesInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
  }

  export type PhoneNumbersCreateWithoutMessagesInput = {
    id: string
    displayPhoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutPhoneNumberInput
  }

  export type PhoneNumbersUncheckedCreateWithoutMessagesInput = {
    id: string
    displayPhoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutPhoneNumberInput
  }

  export type PhoneNumbersCreateOrConnectWithoutMessagesInput = {
    where: PhoneNumbersWhereUniqueInput
    create: XOR<PhoneNumbersCreateWithoutMessagesInput, PhoneNumbersUncheckedCreateWithoutMessagesInput>
  }

  export type ContactsCreateWithoutMessagesInput = {
    waId: string
    profileName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsCreateNestedManyWithoutContactInput
  }

  export type ContactsUncheckedCreateWithoutMessagesInput = {
    waId: string
    profileName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationsUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactsCreateOrConnectWithoutMessagesInput = {
    where: ContactsWhereUniqueInput
    create: XOR<ContactsCreateWithoutMessagesInput, ContactsUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationsCreateWithoutMessagesInput = {
    id?: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumber: PhoneNumbersCreateNestedOneWithoutConversationsInput
    contact: ContactsCreateNestedOneWithoutConversationsInput
    lastMessage?: MessagesCreateNestedOneWithoutConversationsLastMessageInput
    Messages?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutMessagesInput = {
    id?: string
    phoneNumberId: string
    contactWaId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateWithoutLastMessageInput = {
    id?: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneNumber: PhoneNumbersCreateNestedOneWithoutConversationsInput
    contact: ContactsCreateNestedOneWithoutConversationsInput
    messages?: MessagesCreateNestedManyWithoutConversationsInput
    Messages?: MessagesCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutLastMessageInput = {
    id?: string
    phoneNumberId: string
    contactWaId: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutConversationsInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutLastMessageInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutLastMessageInput, ConversationsUncheckedCreateWithoutLastMessageInput>
  }

  export type ConversationsCreateManyLastMessageInputEnvelope = {
    data: ConversationsCreateManyLastMessageInput | ConversationsCreateManyLastMessageInput[]
    skipDuplicates?: boolean
  }

  export type ConversationsUpsertWithoutMessagesInput = {
    update: XOR<ConversationsUpdateWithoutMessagesInput, ConversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutMessagesInput, ConversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutConversationsNestedInput
    contact?: ContactsUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessagesUpdateManyWithoutConversationsNestedInput
    lastMessage?: MessagesUpdateOneWithoutConversationsLastMessageNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type PhoneNumbersUpsertWithoutMessagesInput = {
    update: XOR<PhoneNumbersUpdateWithoutMessagesInput, PhoneNumbersUncheckedUpdateWithoutMessagesInput>
    create: XOR<PhoneNumbersCreateWithoutMessagesInput, PhoneNumbersUncheckedCreateWithoutMessagesInput>
    where?: PhoneNumbersWhereInput
  }

  export type PhoneNumbersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: PhoneNumbersWhereInput
    data: XOR<PhoneNumbersUpdateWithoutMessagesInput, PhoneNumbersUncheckedUpdateWithoutMessagesInput>
  }

  export type PhoneNumbersUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutPhoneNumberNestedInput
  }

  export type PhoneNumbersUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayPhoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutPhoneNumberNestedInput
  }

  export type ContactsUpsertWithoutMessagesInput = {
    update: XOR<ContactsUpdateWithoutMessagesInput, ContactsUncheckedUpdateWithoutMessagesInput>
    create: XOR<ContactsCreateWithoutMessagesInput, ContactsUncheckedCreateWithoutMessagesInput>
    where?: ContactsWhereInput
  }

  export type ContactsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ContactsWhereInput
    data: XOR<ContactsUpdateWithoutMessagesInput, ContactsUncheckedUpdateWithoutMessagesInput>
  }

  export type ContactsUpdateWithoutMessagesInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUpdateManyWithoutContactNestedInput
  }

  export type ContactsUncheckedUpdateWithoutMessagesInput = {
    waId?: StringFieldUpdateOperationsInput | string
    profileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationsUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ConversationsUpsertWithWhereUniqueWithoutMessagesInput = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutMessagesInput, ConversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationsCreateWithoutMessagesInput, ConversationsUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutMessagesInput = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutMessagesInput, ConversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationsUpdateManyWithWhereWithoutMessagesInput = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutMessagesInput>
  }

  export type ConversationsUpsertWithWhereUniqueWithoutLastMessageInput = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutLastMessageInput, ConversationsUncheckedUpdateWithoutLastMessageInput>
    create: XOR<ConversationsCreateWithoutLastMessageInput, ConversationsUncheckedCreateWithoutLastMessageInput>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutLastMessageInput = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutLastMessageInput, ConversationsUncheckedUpdateWithoutLastMessageInput>
  }

  export type ConversationsUpdateManyWithWhereWithoutLastMessageInput = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutLastMessageInput>
  }

  export type ConversationsCreateManyPhoneNumberInput = {
    id?: string
    contactWaId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateManyPhoneNumberInput = {
    id: string
    conversationId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationsUpdateWithoutPhoneNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactsUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessagesUpdateManyWithoutConversationsNestedInput
    lastMessage?: MessagesUpdateOneWithoutConversationsLastMessageNestedInput
    Messages?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutPhoneNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutConversationsNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutPhoneNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutPhoneNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessagesNestedInput
    contact?: ContactsUpdateOneRequiredWithoutMessagesNestedInput
    Conversations?: ConversationsUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutPhoneNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Conversations?: ConversationsUncheckedUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateManyWithoutPhoneNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsCreateManyContactInput = {
    id?: string
    phoneNumberId: string
    lastMessageId?: string | null
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateManyContactInput = {
    id: string
    conversationId: string
    phoneNumberId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationsUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessagesUpdateManyWithoutConversationsNestedInput
    lastMessage?: MessagesUpdateOneWithoutConversationsLastMessageNestedInput
    Messages?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutConversationsNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessagesNestedInput
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutMessagesNestedInput
    Conversations?: ConversationsUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Conversations?: ConversationsUncheckedUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateManyConversationInput = {
    id: string
    phoneNumberId: string
    contactWaId: string
    type: string
    textBody?: string | null
    mediaId?: string | null
    mediaMimeType?: string | null
    mediaUrl?: string | null
    caption?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs: boolean
    status: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessagesNestedInput
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutMessagesNestedInput
    contact?: ContactsUpdateOneRequiredWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ConversationsLastMessage?: ConversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateManyWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutMessagesNestedInput
    contact?: ContactsUpdateOneRequiredWithoutMessagesNestedInput
    Conversations?: ConversationsUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Conversations?: ConversationsUncheckedUpdateManyWithoutMessagesNestedInput
    ConversationsLastMessage?: ConversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessagesUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    isFromUs?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsCreateManyLastMessageInput = {
    id?: string
    phoneNumberId: string
    contactWaId: string
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutConversationsNestedInput
    contact?: ContactsUpdateOneRequiredWithoutConversationsNestedInput
    lastMessage?: MessagesUpdateOneWithoutConversationsLastMessageNestedInput
    Messages?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: PhoneNumbersUpdateOneRequiredWithoutConversationsNestedInput
    contact?: ContactsUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessagesUpdateManyWithoutConversationsNestedInput
    Messages?: MessagesUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutConversationsNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumberId?: StringFieldUpdateOperationsInput | string
    contactWaId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}