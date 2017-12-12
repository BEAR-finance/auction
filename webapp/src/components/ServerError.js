import React from 'react'
import ErrorPage from './ErrorPage'

export default function ServerError() {
  return (
    <ErrorPage>
      <h2>
        Uh-oh. <br />
        We couldn’t retrieve information from the server.
      </h2>
      <div className="error-message">
        <p>Please try again in a few minutes.</p>
        <br/>
        <p>
          If the problem persists, contact us at our&nbsp;
          <a href="https://chat.decentraland.org" target="_blank" rel="noopener noreferrer">
            Community Chat
          </a>
          &nbsp; or via&nbsp;
          <a href="https://twitter.com/decentraland" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>.
        </p>
        <br />
        <p>
          Confused about what&#39;s going on? Check out the&nbsp;
          <a to="https://wiki.decentraland.org/" target="_blank" rel="noopener noreferrer">
            wiki
          </a>&nbsp; for answers.
        </p>
      </div>
    </ErrorPage>
  )
}
