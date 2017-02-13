import { SchemaNode } from '../node';
import { Serializer, WriterFn } from '../serializer';
export declare class DTsSerializer implements Serializer {
    private _writer;
    private interfaceName;
    private _indentDelta;
    private _state;
    constructor(_writer: WriterFn, interfaceName?: string, _indentDelta?: number);
    private _willOutputValue();
    private _top();
    private _indent();
    start(): void;
    end(): void;
    object(node: SchemaNode): void;
    property(node: SchemaNode): void;
    array(node: SchemaNode): void;
    outputOneOf(node: SchemaNode): void;
    outputEnum(node: SchemaNode): void;
    outputValue(node: SchemaNode): void;
    outputString(node: SchemaNode): void;
    outputNumber(node: SchemaNode): void;
    outputInteger(node: SchemaNode): void;
    outputBoolean(node: SchemaNode): void;
}
