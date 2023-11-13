import { useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'



const Home = () => {

    const [books, setBooks] = useState([])


    const getBookData = () => {
        // let result = apiService()
        // console.log(result)
    }


    useEffect(() => getBookData(), [])

    return (
        <div className="card">
            <DataTable value={books} tableStyle={{ minWidth: '50rem' }}>
                <Column field="isbn" header="ISBN"></Column>
                <Column field="book_title" header="Book Name"></Column>
                <Column field="genre" header="genre"></Column>
                <Column field="publication_year" header="Publication Date"></Column>
                <Column field="author" header="Author"></Column>
                <Column field="publisher" header="Publisher"></Column>
                <Column field="language" header="Language"></Column>
                <Column field="page_count" header="Total Pages"></Column>
                <Column field="price" header="Price"></Column>
                <Column field="rating" header="Rating"></Column>
            </DataTable>
        </div>
    )
}

export default Home