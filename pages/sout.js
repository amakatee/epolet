import React, {useState} from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdf1 = () => {
    const [numPage, setNumPage] = useState(null)
    const [ pageNumber , setPageNumber] = useState(1)

    function onDocumnetSuccessLoad({numPage}){
        setNumPage(numPage)
        setPageNumber(1)

    }
    
   

  return (
    <div className='p1-con'>
    <div className='pdf1-doc'>
        <Document file='/assetspdf/svodnaya.pdf' onLoadSuccess={onDocumnetSuccessLoad}>
     
          <Page className='page-pdf' height='200' pageNumber={1}></Page>
         
            <div className='page-pdf'>
            <Page height='200' pageNumber={2}></Page>
            </div>
         </Document>

    </div>
    <div className='pdf2-doc'>
        <Document file='/assetspdf/recomendation.pdf' onLoadSuccess={onDocumnetSuccessLoad}>
     
          <Page className='page-pdf' height='200' pageNumber={1}></Page>
         
            
         </Document>

    </div>
    </div>
  )
}

export default pdf1