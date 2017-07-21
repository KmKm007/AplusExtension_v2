const baseURL = (process.env.NODE_ENV !== 'production')
  ? 'http://localhost:8888/APlusExtension/api'
  : 'http://10.17.1.58:8888/APlusExtension/api'

export const url = baseURL + '/data/estate/default'

export const exportUrl = baseURL + '/data/estate/defaultExport'

export const regionListUrl = baseURL + '/region/list'

export const downloadUrl = baseURL + '/data/estate/defaultDownload'

export const GET_PROPERTY_BY_NO_URL = baseURL + '/property/getByNo'

export const GET_PROPERTY_AD_BY_AD_NO_URL = baseURL + '/propertyAd/getByAdNo'

export const GET_IMAGE_BASE64 = baseURL + '/common/getImageBase64'

export const QRCODE_URL = 'http://qr.liantu.com/api.php?text=http://dg.centanet.com/ershoufang/_ADNO_.html'
