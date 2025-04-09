import { v4 as uuid } from "uuid";
import { useAppSelector } from "./hooks";

export const QuotesList = () => {
  const breakingBad = useAppSelector((state) => state.breakingBad);

  return (
    <div className="container mt-4">
      <div>{breakingBad.hasError && <p>Error al cargar los datos</p>}</div>
      <div>
        {breakingBad.isLoading ? (
          <p className="mt-4 text-center fw-bold text-primary">Cargando</p>
        ) : (
          breakingBad.quotes.map(({ quote, author }) => (
            <figure key={uuid()}>
              <blockquote className="blockquote">
                <p>{quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">{author}</cite>
              </figcaption>
            </figure>
          ))
        )}
      </div>
    </div>
  );
};
