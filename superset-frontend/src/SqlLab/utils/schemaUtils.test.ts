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

import {
  normalizeSchema,
  formatSchemaForDisplay,
  isMultiSchema,
  normalizeSchemaToArray,
} from './schemaUtils';

describe('schemaUtils', () => {
  describe('normalizeSchema', () => {
    it('returns the string as-is when given a string', () => {
      expect(normalizeSchema('public')).toBe('public');
      expect(normalizeSchema('my_schema')).toBe('my_schema');
    });

    it('returns the first element when given an array', () => {
      expect(normalizeSchema(['public', 'private'])).toBe('public');
      expect(normalizeSchema(['schema1', 'schema2', 'schema3'])).toBe(
        'schema1',
      );
    });

    it('returns null when given an empty array', () => {
      expect(normalizeSchema([])).toBe(null);
    });

    it('returns null when given undefined', () => {
      expect(normalizeSchema(undefined)).toBe(null);
    });

    it('returns null when given null', () => {
      expect(normalizeSchema(null)).toBe(null);
    });
  });

  describe('formatSchemaForDisplay', () => {
    it('returns the string as-is when given a string', () => {
      expect(formatSchemaForDisplay('public')).toBe('public');
      expect(formatSchemaForDisplay('my_schema')).toBe('my_schema');
    });

    it('joins array elements with default separator', () => {
      expect(formatSchemaForDisplay(['public', 'private'])).toBe(
        'public, private',
      );
      expect(formatSchemaForDisplay(['schema1', 'schema2', 'schema3'])).toBe(
        'schema1, schema2, schema3',
      );
    });

    it('joins array elements with custom separator', () => {
      expect(formatSchemaForDisplay(['public', 'private'], ' | ')).toBe(
        'public | private',
      );
      expect(formatSchemaForDisplay(['schema1', 'schema2'], ' / ')).toBe(
        'schema1 / schema2',
      );
    });

    it('returns null when given an empty array', () => {
      expect(formatSchemaForDisplay([])).toBe(null);
    });

    it('returns null when given undefined', () => {
      expect(formatSchemaForDisplay(undefined)).toBe(null);
    });

    it('returns null when given null', () => {
      expect(formatSchemaForDisplay(null)).toBe(null);
    });
  });

  describe('isMultiSchema', () => {
    it('returns false when given a string', () => {
      expect(isMultiSchema('public')).toBe(false);
      expect(isMultiSchema('my_schema')).toBe(false);
    });

    it('returns false when given a single-element array', () => {
      expect(isMultiSchema(['public'])).toBe(false);
    });

    it('returns true when given a multi-element array', () => {
      expect(isMultiSchema(['public', 'private'])).toBe(true);
      expect(isMultiSchema(['schema1', 'schema2', 'schema3'])).toBe(true);
    });

    it('returns false when given an empty array', () => {
      expect(isMultiSchema([])).toBe(false);
    });

    it('returns false when given undefined', () => {
      expect(isMultiSchema(undefined)).toBe(false);
    });

    it('returns false when given null', () => {
      expect(isMultiSchema(null)).toBe(false);
    });
  });

  describe('normalizeSchemaToArray', () => {
    it('wraps a string in an array', () => {
      expect(normalizeSchemaToArray('public')).toEqual(['public']);
      expect(normalizeSchemaToArray('my_schema')).toEqual(['my_schema']);
    });

    it('returns the array as-is when given an array', () => {
      expect(normalizeSchemaToArray(['public', 'private'])).toEqual([
        'public',
        'private',
      ]);
      expect(normalizeSchemaToArray(['schema1', 'schema2', 'schema3'])).toEqual(
        ['schema1', 'schema2', 'schema3'],
      );
    });

    it('returns an empty array when given an empty array', () => {
      expect(normalizeSchemaToArray([])).toEqual([]);
    });

    it('returns an empty array when given undefined', () => {
      expect(normalizeSchemaToArray(undefined)).toEqual([]);
    });

    it('returns an empty array when given null', () => {
      expect(normalizeSchemaToArray(null)).toEqual([]);
    });
  });
});
