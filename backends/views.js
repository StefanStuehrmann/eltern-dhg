exports.views = {
  schueler: {
    map: function (doc) {
      if(doc.typ === "schueler")
      emit(doc.schuelername, doc);
    }
  },
  sprechstunden: {
    map: function (doc) {
      if(doc.typ === "sprechstunde")
        emit(doc.lehrer, doc);
    }
  },
  bilder: {
    map: function (doc) {
      if(doc.typ === "bild")
        emit(doc.ereignis, doc);
    }
  },
  ereignisse: {
    map: function (doc) {
      if(doc.typ === "ereignis")
        emit(doc.ereignis, doc);
    }
  }
};
