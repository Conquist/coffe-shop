import React from "react"
import { Link } from "gatsby"
import Title from "./Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que
              en esto hay alguna diferencia en los autores que deste caso
              escriben; aunque por conjeturas verosímiles se deja entender que
              se llamaba Quijana.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
