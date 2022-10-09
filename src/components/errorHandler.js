export const FallBackUI = (error, resetErrorBoundary) => {
    return (
        <div>
            <h1>Something went wrong!!</h1>
            <p> {error.message} </p>
            <button onClick={resetErrorBoundary}>
                Try again!!
            </button>
        </div>
    )
}

export const logError = (error, errorInfo) => {
    console.log(error.message);
    console.log(errorInfo.componentStack);
} 