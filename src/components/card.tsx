import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'


interface CardProps {
    title: string,
    body: string,
    date: string,
    id: string
}

interface CardModalProps {
    body: string,
    id: string,
    title: string
}

const CardModal = ({ id, body, title }: CardModalProps) => {
    return (
        <div className="modal fade" id={id} tabIndex={-1} aria-labelledby={`Label${id}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`Label${id}`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <MDXRenderer>
                            {body}
                        </MDXRenderer>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ id, title, body, date }: CardProps) => {
    return (
        <>
            <CardModal id={`Modal${id}`} body={body} title={title} />
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <p className='card-text'>
                            {title}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target={`#Modal${id}`}>Saber Mais</button>
                        {/* <button type="button" className="btn btn-sm btn-outline-secondary">Nossa Análise</button> */}
                        </div>
                        <small className="text-muted">{date}</small>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
