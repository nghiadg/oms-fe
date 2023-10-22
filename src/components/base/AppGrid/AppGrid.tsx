import { AgGridReact } from "ag-grid-react"
import React, { forwardRef, useRef, useCallback, useImperativeHandle, Ref } from "react"
import { styles, wrapperStyle } from "./AppGrid.styles"
import { LoadingOverlay } from "./components/LoadingOverlay"
import { EmptyOverlay } from "./components/EmptyOverlay"
import { IRowNode } from "ag-grid-community"
import { IAppGridProps, TAppGrid } from "./AppGrid.type"
import { cx } from "@emotion/css"

export const AppGridBase = <TData,>(
  { className, gridOptions, noRowsOverlayComponent, loadingOverlayComponent, ...props }: IAppGridProps,
  ref: Ref<TAppGrid<TData>>,
) => {
  const gridRef = useRef<AgGridReact | null>(null)

  // Utils
  const getData = useCallback(() => {
    const data: TData[] = []
    gridRef.current?.api.forEachNode((node) => {
      if (node.data) {
        data.push(node.data)
      }
    })
    return data
  }, [])

  const getDataAfterFilterAndSort = useCallback(() => {
    const data: TData[] = []
    gridRef.current?.api.forEachNodeAfterFilterAndSort((node) => {
      if (node.data) {
        data.push(node.data)
      }
    })
    return data
  }, [])

  const getNodes = useCallback(() => {
    const rowNodes: IRowNode<TData>[] = []
    gridRef.current?.api.forEachNode((node) => {
      rowNodes.push(node)
    })
    return rowNodes
  }, [])

  const getNodesAfterFilterAndSort = useCallback(() => {
    const rowNodes: IRowNode<TData>[] = []
    gridRef.current?.api.forEachNodeAfterFilterAndSort((node) => {
      rowNodes.push(node)
    })
    return rowNodes
  }, [])

  useImperativeHandle(ref, () =>
    Object.assign(
      {
        getData,
        getDataAfterFilterAndSort,
        getNodes,
        getNodesAfterFilterAndSort,
      },
      gridRef.current,
    ),
  )

  return (
    <div className={cx("ag-theme-alpine", wrapperStyle)}>
      <AgGridReact
        ref={gridRef}
        className={cx(styles, className)}
        gridOptions={{
          rowHeight: 40,
          headerHeight: 40,
          ...gridOptions,
        }}
        noRowsOverlayComponent={noRowsOverlayComponent ?? EmptyOverlay}
        loadingOverlayComponent={loadingOverlayComponent ?? LoadingOverlay}
        {...props}
      />
    </div>
  )
}

export const AppGrid = Object.assign(forwardRef(AppGridBase), {
  LoadingOverlay: LoadingOverlay,
})
