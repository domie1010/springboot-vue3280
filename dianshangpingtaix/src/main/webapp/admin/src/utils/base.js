const base = {
    get() {
        return {
            url : "http://localhost:8080/dianshangpingtaix/",
            name: "dianshangpingtaix",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianshangpingtaix/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电商平台"
        } 
    }
}
export default base
