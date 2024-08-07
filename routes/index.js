const router = require('koa-router')()
const { listFiles } = require('../utils')
const config= require('../config')

//查询文件列表
router.get('/queryAll',async(ctx,next)=>{
	 const dir = config.fileDirectoryPath
   const allowedFileTypes =config.fileTypes
	  const files = listFiles(dir,allowedFileTypes)
	  ctx.body = {
	    files: files
	  }
})

module.exports = router
