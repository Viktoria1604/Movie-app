
const titleClass = (title:string) => {
    if(title.length > 27) {return "card__title--text card__exsmall"}
    if(title.length > 20) {return "card__title--text card__small"}
    if(title.length >= 15) {return "card__title--text card__medium"}
    if(title.length > 0) {return "card__title--text"}}

    const rateColor = (vote_average:number) => {
      if(vote_average > 7) {return "card__rate--circle  card__rate--greencircle"}
      if(vote_average >=5) {return "card__rate--circle  card__rate--yellowcircle"}
      if(vote_average >=3) {return "card__rate--circle  card__rate--orangecircle"}
      if(vote_average>=0) {return "card__rate--circle  card__rate--redcircle"}}

      export {rateColor, titleClass}