import { PropertySelector, PathSelector, FunctionSelector, Comparator } from '../components/ng-redux';
export declare type PropertyDecorator = (target: any, propertyKey: string) => void;
/**
 * Selects an observable from the store, and attaches it to the decorated
 * property.
 *
 * @param { PropertySelector | PathSelector | FunctionSelector } selector
 * An Rxjs selector function, property name string, or property name path
 * (array of strings/array indices) that locates the store data to be
 * selected
 *
 * @param { Comparator } comparer function for this selector
 */
export declare function select<T>(selector?: PropertySelector | PathSelector | FunctionSelector<any, T>, comparator?: Comparator): PropertyDecorator;
