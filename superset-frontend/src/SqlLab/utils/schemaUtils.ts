/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Normalizes a schema value that can be either a string or an array of strings
 * into a single string value. This is useful for API calls that only support
 * a single schema.
 *
 * @param schema - The schema value to normalize (can be undefined, string, or string[])
 * @returns A single schema string, or null if no schema is available
 *
 * @example
 * normalizeSchema('public') // Returns 'public'
 * normalizeSchema(['public', 'private']) // Returns 'public'
 * normalizeSchema([]) // Returns null
 * normalizeSchema(undefined) // Returns null
 */
export const normalizeSchema = (
  schema: string | string[] | undefined | null,
): string | null => {
  if (!schema) return null;
  if (Array.isArray(schema)) {
    return schema.length > 0 ? schema[0] : null;
  }
  return schema;
};

/**
 * Formats a schema value for display purposes. If the schema is an array,
 * joins the elements with a separator. Otherwise, returns the string as-is.
 *
 * @param schema - The schema value to format (can be undefined, string, or string[])
 * @param separator - The separator to use when joining arrays (default: ', ')
 * @returns A formatted string representation of the schema(s), or null if no schema
 *
 * @example
 * formatSchemaForDisplay('public') // Returns 'public'
 * formatSchemaForDisplay(['public', 'private']) // Returns 'public, private'
 * formatSchemaForDisplay(['public', 'private'], ' | ') // Returns 'public | private'
 * formatSchemaForDisplay([]) // Returns null
 * formatSchemaForDisplay(undefined) // Returns null
 */
export const formatSchemaForDisplay = (
  schema: string | string[] | undefined | null,
  separator = ', ',
): string | null => {
  if (!schema) return null;
  if (Array.isArray(schema)) {
    return schema.length > 0 ? schema.join(separator) : null;
  }
  return schema;
};

/**
 * Checks if a schema value represents multiple schemas (i.e., is an array with
 * more than one element).
 *
 * @param schema - The schema value to check
 * @returns true if the schema represents multiple schemas, false otherwise
 *
 * @example
 * isMultiSchema('public') // Returns false
 * isMultiSchema(['public']) // Returns false
 * isMultiSchema(['public', 'private']) // Returns true
 * isMultiSchema([]) // Returns false
 * isMultiSchema(undefined) // Returns false
 */
export const isMultiSchema = (
  schema: string | string[] | undefined | null,
): boolean => {
  return Array.isArray(schema) && schema.length > 1;
};

/**
 * Normalizes a schema value into an array format. This is useful for components
 * that need to work with arrays internally, regardless of whether the input is
 * a single schema or multiple schemas.
 *
 * @param schema - The schema value to normalize (can be undefined, string, or string[])
 * @returns An array of schema strings, or an empty array if no schema is available
 *
 * @example
 * normalizeSchemaToArray('public') // Returns ['public']
 * normalizeSchemaToArray(['public', 'private']) // Returns ['public', 'private']
 * normalizeSchemaToArray([]) // Returns []
 * normalizeSchemaToArray(undefined) // Returns []
 */
export const normalizeSchemaToArray = (
  schema: string | string[] | undefined | null,
): string[] => {
  if (!schema) return [];
  if (Array.isArray(schema)) {
    return schema;
  }
  return [schema];
};
