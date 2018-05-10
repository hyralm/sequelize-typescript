import {LoggingOptions, SearchPathOptions, WhereOptions} from 'sequelize';
import {IIncludeOptions} from './IIncludeOptions';
import {ModelType} from "../types/ModelType";

/**
 * Based on "CountOptions" type definitions from:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6490e738919a47761850caaeb14517b8af60d2a1/types/sequelize/index.d.ts#L3353
 */

export interface ICountOptions<T> extends LoggingOptions, SearchPathOptions {

  /**
   * A hash of search attributes.
   */
  where?: WhereOptions<T> | string[];

  /**
   * Include options. See `find` for details
   */
  include?: Array<ModelType<any> | IIncludeOptions>;

  /**
   * Apply COUNT(DISTINCT(col))
   */
  distinct?: boolean;

  /**
   * Used in conjustion with `group`
   */
  attributes?: Array<string | [string, string]>;

  /**
   * For creating complex counts. Will return multiple rows as needed.
   *
   * TODO: Check?
   */
  group?: Object;
}
