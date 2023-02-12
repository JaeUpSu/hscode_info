// import React from "react";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// import {pdfjs} from"@mik"

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// // Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default MyDocument;

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export function MyDocument() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="./Runner8.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        //이전 페이지 보기
        <span
          onClick={() =>
            pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
          }
        >
          &lt;
        </span>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        //다음 페이지 보기
        <span
          onClick={() =>
            pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
          }
        >
          &gt;
        </span>
      </p>
    </div>
  );
}
