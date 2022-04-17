import * as React from 'react'
import { graphql } from 'gatsby'
import Card from '../components/card'
import Layout from '../components/layout'

// Query to get categories and cards
export const query = graphql`
  query {
    cards: allFile(filter: {sourceInstanceName: {eq: "cards"}}) {
      nodes {
        childMdx {
          id
          body
          frontmatter {
            date(formatString: "D/MM/YYYY")
            dateRaw: date
            title
            category
          }
        }
      }
    }
    categories: allFile(filter: {sourceInstanceName: {eq: "categories"}}) {
      nodes {
        childMdx {
          id
          frontmatter {
            title
            color
            backgroundColor
            borderColor
            order
          }
        }
      }
    }
  }
`

// Type declarations
interface CategoryType {
  id: string,
  frontmatter: {
    title: string,
    order: number,
    color: string,
    backgroundColor: string,
    borderColor: string
  }
}

interface CardType {
  id: string,
  body: string,
  frontmatter: {
    date: string,
    dateRaw: string,
    title: string,
    category: string
  }
}

interface queryResultsType {
  data: {
    cards: {
      nodes: {
        childMdx: CardType
      }[]
    },
    categories: {
      nodes: {
        childMdx: CategoryType
      }[]
    }
  }
}

// React Component
const IndexPage = ({ data }: queryResultsType) => {
  const allCards = data.cards.nodes.map(node => (node.childMdx));
  const allCategories = data.categories.nodes.map(node => (node.childMdx));

  const [currentCategory, setCategory] = React.useState<CategoryType|null>(null);

  const getCardsByCategory = (category: CategoryType | null) => {
    if (!category || category.frontmatter.title == "Todas") return allCards;

    return allCards.filter(card => card.frontmatter.category === category.frontmatter.title);
  };

  const getOrderedCategories = () => {
    return allCategories.sort((a, b) => (a.frontmatter.order - b.frontmatter.order));
  };

  return (
    <Layout pageTitle="Home Page">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Olha o que ele fez</h1>
            <p className="lead text-muted">Escolha uma categoria pra filtrar os feitos de Bolsonaro</p>
            <p>
              {getOrderedCategories().map(category => {
                const { frontmatter } = category;

                const style = {
                  'color': frontmatter.color,
                  'backgroundColor': frontmatter.backgroundColor,
                  'borderColor': frontmatter.borderColor
                };

                return (
                  <a id={category.id} href="#" className="btn my-2" style={style} onClick={() => (setCategory(category))}>{frontmatter.title}</a>
                );
              })}
            </p>
          </div>
        </div>
      </section>
      <div className='album py-5 bg-light'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {getCardsByCategory(currentCategory).map(card => {
              return (
                <Card title={card.frontmatter.title} date={card.frontmatter.date} id={card.id} body={card.body} />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage