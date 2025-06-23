export default function APIInfo(prop){
    return(
        <div>
            <div>
                <h4>API Connection Info:</h4>
                <p><strong>Endpoint:</strong> {prop.api_url}/chat</p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Content-Type:</strong> application/json</p>
            </div>
        </div>
    )
}