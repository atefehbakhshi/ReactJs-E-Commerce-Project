import { FieldError, FieldErrorsImpl } from "react-hook-form/dist/types/errors";
import { Merge } from "react-hook-form/dist/types/utils";
import {
  CoreChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  BarControllerChartOptions,
} from "chart.js";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import store from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetDataInputsT = (string | number)[];

// pagination
export type PaginationT = (totalCount: number, dataPerPage: number) => number[];

// hooks
export type GetDataT = (
  subCategoryId: number,
  page: number
) => [never[], number, number];

// error message
export type ErrorMessageT =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;

export type ChartOptionsT = _DeepPartialObject<
  CoreChartOptions<"bar"> &
    ElementChartOptions<"bar"> &
    PluginChartOptions<"bar"> &
    DatasetChartOptions<"bar"> &
    ScaleChartOptions<"bar"> &
    BarControllerChartOptions
>;
