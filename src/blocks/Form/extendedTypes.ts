/* eslint-disable @typescript-eslint/no-namespace */
/**
 * This file extends the form field types from the Payload CMS form builder plugin
 * to include custom field types without modifying the plugin's source code.
 *
 * Why extend types?
 * -----------------
 * The Payload CMS form builder plugin defines a set of standard field types through the
 * FormFieldBlock union type. When adding custom field types like Date and File, we need
 * a way to maintain type safety without modifying the plugin's source code.
 *
 * By creating a union type that combines the original FormFieldBlock with our custom types,
 * we can:
 *   1. Use custom field types within the form system
 *   2. Maintain proper TypeScript type checking
 *   3. Keep all form fields in a single type system
 *   4. Not break when the plugin updates
 *
 * How to use:
 * -----------
 * In components that work with form fields:
 * ```typescript
 * import { ExtendedFormFieldBlock } from './extendedTypes';
 *
 * // Type-safe form fields
 * const fields: ExtendedFormFieldBlock[] = [
 *   { blockType: 'text', name: 'name', label: 'Name' },
 *   { blockType: 'date', name: 'birthDate', label: 'Date of Birth' },
 *   { blockType: 'file', name: 'document', label: 'Upload Document' }
 * ];
 * ```
 *
 * FlexBuilder Pattern
 * ------------------
 * This file implements a type-level builder pattern using the FlexBuilder namespace.
 * The builder pattern allows you to:
 *
 * 1. Extend types in a chainable, readable way
 * 2. Avoid TypeScript-JSX syntax conflicts by using property access instead of generics
 * 3. Maintain complete control over which types to include in your extensions
 * 4. Add new field types without modifying existing code
 *
 * Advanced Usage
 * -------------
 * You can create custom extension maps for more flexible type building:
 *
 * ```typescript
 * // Define custom field types
 * interface TimeField {
 *   blockType: 'time';
 *   name: string;
 *   // other properties...
 * }
 *
 * interface ColorField {
 *   blockType: 'color';
 *   name: string;
 *   format?: 'hex' | 'rgb';
 * }
 *
 * // Create your custom extension map
 * interface CustomExtensions {
 *   readonly TimeField: TimeField;
 *   readonly ColorField: ColorField;
 * }
 *
 * // Initialize a builder with your custom extensions
 * type CustomBuilder = FlexBuilder.Builder<FormFieldBlock, CustomExtensions>;
 *
 * // Use the builder to create your custom type
 * type CustomFormFields = FlexBuilder.GetType<
 *   CustomBuilder['with']['TimeField']['with']['ColorField']
 * >;
 * ```
 *
 * Adding New Field Types
 * ---------------------
 * To add a new field type to the system:
 *
 * 1. Create the field type interface:
 *    ```typescript
 *    // SliderField/types.ts
 *    export interface SliderField {
 *      blockType: 'slider';
 *      name: string;
 *      label?: string;
 *      min?: number;
 *      max?: number;
 *    }
 *    ```
 *
 * 2. Import and add it to the Init type in FlexBuilder:
 *    ```typescript
 *    import type { SliderField } from './SliderField/types';
 *
 *    export type Init<T> = Builder<
 *      T,
 *      {
 *        readonly DateField: DateField;
 *        readonly FileField: FileField;
 *        readonly SliderField: SliderField; // New field type
 *      }
 *    >;
 *    ```
 *
 * 3. Use it in your final type definition:
 *    ```typescript
 *    export type ExtendedFormFieldBlock = FlexBuilder.GetType<
 *      FlexBuilder.Init<FormFieldBlock>
 *        ['with']['DateField']
 *        ['with']['FileField']
 *        ['with']['SliderField']
 *    >;
 *    ```
 *
 * Debugging Type Issues
 * -------------------
 * If you encounter type errors:
 *
 * 1. Make sure all field types have a 'blockType' property
 * 2. Check that the field name in the extension map matches the property used in the chain
 * 3. Verify that your JSX files are properly set up to handle TypeScript
 * 4. Remember that the property access syntax ['with']['Type'] is required in JSX files
 *
 * Performance Considerations
 * ------------------------
 * This pattern operates entirely at the type level with zero runtime cost.
 * However, complex type chains can increase TypeScript compilation time.
 * For very large sets of field types, consider:
 *
 * 1. Creating intermediate types for common combinations
 * 2. Breaking complex chains into smaller pieces
 * 3. Using a simpler union type if type-checking performance becomes an issue
 */

import type { FormFieldBlock } from '@payloadcms/plugin-form-builder/types'
import type { DateField } from './Date/types'
import type { FileField } from './File/types'
/**
 * A flexible type-level builder pattern that gives you full control
 * over what types you extend with, without hard-coding them.
 */
export namespace FlexBuilder {
  // Type-level map that holds extension types
  export interface ExtensionMap {
    readonly [key: string]: any
  }

  // Typed builder that properly tracks the accumulated type
  export interface Builder<T, M extends ExtensionMap = {}> {
    readonly type: T
    readonly with: {
      readonly [K in keyof M]: Builder<T | M[K], M>
    }
  }

  // Initialize a builder with a base type and your extension map
  export type Init<T> = Builder<
    T,
    {
      // Add your extension types at usage time!
      readonly DateField: DateField
      readonly FileField: FileField
      // Add more as needed
    }
  >

  // Extract the final type from a builder
  export type GetType<B extends { type: any }> = B['type']
}

export type ExtendedFormFieldBlock = FlexBuilder.GetType<
  FlexBuilder.Init<FormFieldBlock>['with']['DateField']['with']['FileField']
>

/**
 * Usage examples:
 *
 * // Just with date fields
 * type FormWithDateOnly = FlexBuilder.GetType<
 *   FlexBuilder.Init<FormFieldBlock>['with']['DateField']
 * >;
 *
 * // Just with file fields
 * type FormWithFileOnly = FlexBuilder.GetType<
 *   FlexBuilder.Init<FormFieldBlock>['with']['FileField']
 * >;
 *
 * // Usage with Component.tsx
 * export type FormBlockType = {
 *   blockName?: string;
 *   blockType?: 'formBlock';
 *   enableIntro: boolean;
 *   form: FormType & {
 *     fields: ExtendedFormFieldBlock[] // Using our extended type
 *   };
 *   introContent?: SerializedEditorState;
 * };
 *
 * // Completely custom extension map
 * interface MyExtensions {
 *   readonly CustomField1: { blockType: 'custom1'; name: string;  ...  };
 *   readonly CustomField2: { blockType: 'custom2'; name: string;  ...  };
 * }
 *
 * type MyBuilder = FlexBuilder.Builder<FormFieldBlock, MyExtensions>;
 *
 * type MyCustomFields = FlexBuilder.GetType<
 *   MyBuilder['with']['CustomField1']['with']['CustomField2']
 * >;
 */
