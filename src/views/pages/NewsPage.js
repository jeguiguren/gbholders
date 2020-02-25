import React from "react";
import ReactPaginate from 'react-paginate';


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import GenericHeader from "components/Headers/GenericHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Section from 'components/General/Section.js';
import NewsCard from "components/General/NewsCard.js";


const news = [
{
  title: 'La bolsa moviliza más plata: $11.796 Millones 1',
  preview: 'Alrededor del 11 % del Producto Interno Bruto transó el mercado de valores. La banca domina el índice accionario.',
  author: 'Marketing',
  date: '13 Enero 2020',
},
{
  title: 'La bolsa moviliza más plata: $11.796 Millones 2',
  preview: 'Alrededor del 11 % del Producto Interno Bruto transó el mercado de valores. La banca domina el índice accionario.',
  author: 'Marketing',
  date: '13 Enero 2020',
},
{
  title: 'La bolsa moviliza más plata: $11.796 Millones 3',
  preview: 'Alrededor del 11 % del Producto Interno Bruto transó el mercado de valores. La banca domina el índice accionario.',
  author: 'Marketing',
  date: '13 Enero 2020',
},
{
  title: 'La bolsa moviliza más plata: $11.796 Millones 4',
  preview: 'Alrededor del 11 % del Producto Interno Bruto transó el mercado de valores. La banca domina el índice accionario.',
  author: 'Marketing',
  date: '13 Enero 2020',
},
{
  title: 'La bolsa moviliza más plata: $11.796 Millones 5',
  preview: 'Alrededor del 11 % del Producto Interno Bruto transó el mercado de valores. La banca domina el índice accionario.',
  author: 'Marketing',
  date: '13 Enero 2020',
},
];


class NewsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], pageCount: 0, offset: 0, perPage: 3};
  }


  getData() {
    let data = news.slice(this.state.offset, this.state.offset + this.state.perPage);
    let pageCount = Math.ceil(news.length / this.state.perPage);
    this.setState({data, pageCount});
  }

  componentDidMount() {
    this.getData();
  }

  handlePageClick = data => {
    console.log(data);
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
    this.setState({ offset: offset }, () => {
      this.getData();
    });
  };


  render() {
    return (
       <div className="commentBox">
        {this.state.data.map(item => (
          <NewsCard title={item.title} preview={item.preview} author={item.author} date={item.date}/>))}

        <div style={{justifyContent: 'center', display: 'flex'}}>
          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'pagination page-item'}
            pageLinkClassName={'pagination page-item'}
            activeLinkClassName={'pagination page-item active'}
            previouClassName={'pagination page-item'}
            nexClassName={'pagination page-item'}
            previousLinkClassName={'pagination page-item'}
            nextLinkClassName={'pagination page-item'}
            activeClassName={'active'}
          />
        </div>
      </div>
      // <>

      //     {this.state.news.map(item => (
      //       <NewsCard title={item.title} preview={item.preview} author={item.author} date={item.date}/>
      //     ))}
        
      // </>
    );
  }
}
//


function NewsPage() {
  const headerImage = "url(" + require("assets/img/bg6.jpg") + ")";
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("menu-on-left");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("menu-on-left");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
     <>
      <ExamplesNavbar />
        <GenericHeader image={headerImage} title="" subtitle="Las últimas noticias en el Mercado de Valores"/>
        <Section className="text-left">
          <NewsGrid/>
        </Section>
      <DefaultFooter/>
    </>
  );
}

export default NewsPage;
