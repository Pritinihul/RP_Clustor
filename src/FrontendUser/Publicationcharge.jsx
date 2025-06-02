
import Forauthorbanner from '../FrontendUser/banners/Forauthorbanner';

const Publicationcharge = () => {
  const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#4a4ac4",
    marginBottom: "10px",
  },
  paragraph: {
    textAlign: "center",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "10px",
     textAlign: "center",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "10px",
  },
  details: {
    paddingLeft: "20px",
    marginBottom: "20px",
  },
};
  return (
   <>
   <Forauthorbanner/>
    <div style={styles.container}>
      <h2 style={styles.heading}>Publication Charges</h2>
      <p style={styles.paragraph}>
        For Publishing paper, Author needs to pay publication charges as follow:
      </p>

      <h3 style={styles.subHeading}>Charges for Indian Authors</h3>
      <ul style={styles.list}>
        <li>
          <strong>Standard Paper</strong> (Two-column IJIRT Format, 6 pages):
        </li>
      </ul>
      <div style={styles.details}>
        <p><strong>Additional Details:</strong></p>
        <ul>
          <li>
            <strong>Number of Authors:</strong> Each paper can include up to 13
            authors without additional charges.
          </li>
          <li>
            <strong>Page Limit:</strong> The standard processing fee covers a
            manuscript with 6 pages in a double-column format or 8 pages in a
            single-column format.
          </li>
          <li>
            <strong>Extra Charges:</strong> Manuscripts exceeding the standard
            page limit will incur additional charges.
          </li>
        </ul>
      </div>

    <hr />

      <h3 style={styles.subHeading}>Charges for International Authors</h3>
      <ul style={styles.list}>
        <li><strong>Standard Paper:</strong> $100</li>
        <li><strong>Extra Charges:</strong></li>
      </ul>
      <div style={styles.details}>
        <ul>
          <li>
            <strong>Extra Pages:</strong> Manuscripts exceeding the standard
            page (6 double or 8 single column pages) limit will incur
            additional charges.
          </li>
        </ul>
      </div>

      <div style={styles.details}>
        <p><strong>Payment Instructions:</strong></p>
        <ul>
          <li>
            Payments should be made through the options provided during the
            acceptance notification. Ensure all details are accurate to avoid
            delays in processing your submission.
          </li>
        </ul>
      </div>
    </div>
   </>
  )
}

export default Publicationcharge
