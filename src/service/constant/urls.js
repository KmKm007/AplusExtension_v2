const baseURL = (process.env.NODE_ENV !== 'production')
  ? 'http://10.17.1.157:8888/APlusExtension/api'
  : 'http://10.17.1.58:8888/APlusExtension/api'

export const url = baseURL + '/data/estate/default'
export const exportUrl = baseURL + '/data/estate/defaultExport'
export const regionListUrl = baseURL + '/region/list'
export const downloadUrl = baseURL + '/data/estate/defaultDownload'
