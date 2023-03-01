
export const routesConfig = {
  default: {
    api_id: "obsrv.api"
  },
  query: {
    native_query: {
      api_id: "obsrv.native.query",
      method: "post",
      path: "/obsrv/v1/query"
    },
    sql_query: {
      api_id: "obsrv.sql.query",
      method: "post",
      path: "/obsrv/v1/sql-query"
    }
  },
  config: {
    dataset: {
      save: {
        api_id: "obsrv.config.dataset.save",
        method: "post",
        path: "/obsrv/v1/datasets"
      },
      read: {
        api_id: "obsrv.config.dataset.read",
        method: "get",
        path: "/obsrv/v1/datasets/:datasetId"
      },
      update: {
        api_id: "obsrv.config.dataset.save",
        method: "patch",
        path: "/obsrv/v1/datasets"
      },
      list: {
        api_id: "obsrv.config.dataset.list",
        method: "post",
        path: "/obsrv/v1/datasets/list"
      }
    },
    datasource: {
      save: {
        api_id: "obsrv.config.datasource.save",
        method: "post",
        path: "/obsrv/v1/datasources"
      },
      read: {
        api_id: "obsrv.config.datasource.read",
        method: "get",
        path: "/obsrv/v1/datasources/:datasourceId"
      },
      update: {
        api_id: "obsrv.config.datasource.save",
        method: "patch",
        path: "/obsrv/v1/datasources"
      },
      list: {
        api_id: "obsrv.config.datasource.list",
        method: "post",
        path: "/obsrv/v1/datasources/list"
      }
    }
  },
  data_ingest: {
    api_id: "obsrv.dataset.data.in",
    method: "post",
    path: "/obsrv/v1/data/:datasetId"
  }
}

