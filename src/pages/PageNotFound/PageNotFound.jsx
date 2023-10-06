import React from 'react'
import { MessageSection, MessageError, NotFoundImage } from './PageNotFoundStyles'




const PageNotFound = () => {
  return (
<MessageSection>
   <MessageError>Lo sentimos esta pagina no existe =(</MessageError>
    <NotFoundImage src="./images/logo.png" alt="Logo react" />
</MessageSection>
  )
}

export default PageNotFound