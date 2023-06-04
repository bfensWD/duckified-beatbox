class Board {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const CELLS = 20;
    //create row for each beat
    $(".beats").children().each( (idx, beat) => {
        //create first cell for each row to be label for each row
//        const $ul = $( `<ul class="${beat.id} beat-row"><li class="beat-row-label">${beat.id}</li>`);
        const $ul = $( `<ul class="row_${idx} beat-row"><li class="beat-row-label"><select id=\"track-selector-${idx}" class="beat-track-selector"><option value="${beat.id}">${beat.id}</option><option value="alt-1">alt-1</option></select></li>`);
        //create cell for each row with mousedown event handler
        $(`<li class="${beat}-button">`);

        for (let i = 0; i < CELLS; i++) {
          const $li = $( `<li class="col_${i} ${beat.id}">`);
          $li.data(beat, 'sound');

          $li.mousedown(() => {
            $li.toggleClass("on");
            if ($li.hasClass("on") && $("audio").hasClass("muted") === false) {
              beat.play();
            }
          });

          $ul.append($li);
        }

      $ul.appendTo(".beatbox");
    });
  }



 }

export default Board;
