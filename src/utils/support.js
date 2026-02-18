function reRoute(value) {
    const router = import.meta.env.VITE_GH_PATH
    if (router === undefined) {
        return value
    } else {
        return router + value
    }
}

export default  reRoute; 