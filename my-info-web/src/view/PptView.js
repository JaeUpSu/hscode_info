// import React from "react";
// import { usePDF, Document, Page, pdfjs } from "react-pdf";
// import { Text, View, StyleSheet } from "@react-pdf/renderer";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
// export default function PdfApp() {
//   const [numPages, setNumPages] = React.useState(null);
//   const [pageNumber, setPageNumber] = React.useState(1);
//   const [instance, updateInstance] = usePDF({
//     document: (
//       <Document file="./Runner8.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page style={styles.page} pageNumber={pageNumber}>
//           <View style={styles.section}>
//             <Text>Section #1</Text>
//           </View>
//           <View style={styles.section}>
//             <Text>Section #2</Text>
//           </View>
//         </Page>
//       </Document>
//     ),
//   });

//   if (instance.loading) return <div>Loading...</div>;
//   if (instance.error) return <div>Something went wrong: {error}</div>;

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <a href={instance.url} download="Runner8.pdf">
//         Download
//       </a>
//       <p>
//         //이전 페이지 보기
//         <span
//           onClick={() =>
//             pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
//           }
//         >
//           &lt;
//         </span>
//         <span>
//           Page {pageNumber} of {numPages}
//         </span>
//         //다음 페이지 보기
//         <span
//           onClick={() =>
//             pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
//           }
//         >
//           &gt;
//         </span>
//       </p>
//     </div>
//   );
// }

import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
const MyDoc = () => (
  <Document>
    <Page>// My document data</Page>
  </Document>
);

// ppt 에 다운로드 버튼 만들고 연결
const PdfDownload = ({ pdf }) => (
  <PDFDownloadLink document={<MyDoc />} fileName={pdf}>
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "💾"
    }
  </PDFDownloadLink>
);

export default PdfDownload;
