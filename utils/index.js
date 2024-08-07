const fs = require('fs');
const path = require('path');

// 获取指定目录下的所有特定文件类型的文件列表，包括文件名、类型和大小
const listFiles = (dir, allowedFileTypes) => {
    return fs.readdirSync(dir)
        .map(item => {
            const itemPath = path.join(dir, item);
            const stats = fs.statSync(itemPath);
            // 只返回特定文件类型的信息
            if (stats.isFile() && allowedFileTypes.includes(path.extname(item).toLowerCase())) {
                return {
                    name: item,                       // 文件名
                    type: path.extname(item),        // 文件类型（扩展名）
                    size: `${(stats.size / (1024 * 1024)).toFixed(2)} MB` // 文件大小（MB），保留两位小数并添加单位
                };
            }
            return null; // 不是特定文件类型，返回 null
        })
        .filter(item => item !== null); // 过滤掉 null 值
};

module.exports = {
    listFiles
};