// Generated by dts-bundle v0.5.0

export function compile(schema: JSONSchema.Schema, path: string, settings?: TsType.TsTypeSettings): string;
export function compileFromFile(inputFilename: string): Promise<string | Error>;

export namespace JSONSchema {
    type SimpleTypes = "array" | "boolean" | "integer" | "null" | "number" | "object" | "string";
    /** Core schema meta-schema */
    type HttpJsonSchemaOrgDraft04Schema = {
        id?: string;
        $schema?: string;
        title?: string;
        description?: string;
        default?: any;
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: boolean;
        minimum?: number;
        exclusiveMinimum?: boolean;
        maxLength?: number;
        minLength?: number;
        pattern?: string;
        additionalItems?: boolean | HttpJsonSchemaOrgDraft04Schema;
        items?: HttpJsonSchemaOrgDraft04Schema | HttpJsonSchemaOrgDraft04Schema[];
        maxItems?: number;
        minItems?: number;
        uniqueItems?: boolean;
        maxProperties?: number;
        minProperties?: number;
        required?: string[];
        additionalProperties?: boolean | HttpJsonSchemaOrgDraft04Schema;
        definitions?: {
            [k: string]: HttpJsonSchemaOrgDraft04Schema;
        };
        properties?: {
            [k: string]: HttpJsonSchemaOrgDraft04Schema;
        };
        patternProperties?: {
            [k: string]: HttpJsonSchemaOrgDraft04Schema;
        };
        dependencies?: {
            [k: string]: HttpJsonSchemaOrgDraft04Schema | string[];
        };
        enum?: any[];
        tsEnumNames?: string[];
        type?: SimpleTypes | SimpleTypes[];
        allOf?: HttpJsonSchemaOrgDraft04Schema[];
        anyOf?: HttpJsonSchemaOrgDraft04Schema[];
        oneOf?: HttpJsonSchemaOrgDraft04Schema[];
        not?: HttpJsonSchemaOrgDraft04Schema;
        [k: string]: any;
    };
    type Schema = HttpJsonSchemaOrgDraft04Schema & {
        $ref?: string;
    };
}

export namespace TsType {
    interface TsTypeSettings {
        addEnumUtils?: boolean;
        declarationDescription?: boolean;
        declareReferenced?: boolean;
        declareSimpleType?: boolean;
        exportInterfaces?: boolean;
        endPropertyWithSemicolon?: boolean;
        endTypeWithSemicolon?: boolean;
        propertyDescription?: boolean;
        useConstEnums?: boolean;
        useFullReferencePathAsName?: boolean;
        useInterfaceDeclaration?: boolean;
        useTypescriptEnums?: boolean;
    }
    var DEFAULT_SETTINGS: TsTypeSettings;
    abstract class TsType {
        id?: string;
        description?: string;
        protected safeId(): string | undefined;
        protected toBlockComment(settings: TsTypeSettings): string;
        protected _toDeclaration(decl: string, settings: TsTypeSettings): string;
        protected abstract _type(settings: TsTypeSettings): string;
        isSimpleType(): boolean;
        toDeclaration(settings: TsTypeSettings): string;
        toSafeType(settings: TsTypeSettings): string;
        toType(settings: TsTypeSettings): string;
        toString(): string;
    }
    interface TsProp {
        name: string;
        required: boolean;
        type: TsType;
    }
    class Any extends TsType {
        _type(): string;
    }
    class String extends TsType {
        _type(): string;
    }
    class Boolean extends TsType {
        _type(): string;
    }
    class Number extends TsType {
        _type(): string;
    }
    class Object extends TsType {
        _type(): string;
    }
    class Void extends TsType {
        _type(): string;
    }
    class Literal extends TsType {
        constructor(value: any);
        _type(): any;
    }
    class EnumValue {
        identifier: string;
        value: string;
        constructor(enumValues: string[]);
        toDeclaration(): string;
        toString(): string;
    }
    class Enum extends TsType {
        enumValues: EnumValue[];
        constructor(enumValues: EnumValue[]);
        isSimpleType(): boolean;
        _type(settings: TsTypeSettings): string;
        toSafeType(settings: TsTypeSettings): string;
        toDeclaration(settings: TsTypeSettings): string;
    }
    class EnumUtils extends TsType {
        protected enm: Enum;
        constructor(enm: Enum);
        isSimpleType(): boolean;
        _type(settings: TsTypeSettings): string;
        toSafeType(settings: TsTypeSettings): string;
        toDeclaration(settings: TsTypeSettings): string;
        makeValuesMethod(settings: TsTypeSettings): string;
        makeFromStringValueMethod(settings: TsTypeSettings): string;
        makeToStringValueMethod(settings: TsTypeSettings): string;
        makeFromStringValuesMethod(settings: TsTypeSettings): string;
    }
    class Array extends TsType {
        constructor(type?: TsType);
        _type(settings: TsTypeSettings): string;
    }
    class Intersection extends TsType {
        protected data: TsType[];
        constructor(data: TsType[]);
        isSimpleType(): boolean;
        _type(settings: TsTypeSettings): string;
        toSafeType(settings: TsTypeSettings): string;
    }
    class Union extends Intersection {
        isSimpleType(): boolean;
        _type(settings: TsTypeSettings): string;
    }
    class Interface extends TsType {
        constructor(props: TsProp[]);
        static reference(id: string): Interface;
        protected _type(settings: TsTypeSettings, declaration?: boolean): string;
        isSimpleType(): boolean;
        toDeclaration(settings: TsTypeSettings): string;
    }
}

