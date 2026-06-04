      // ── Category filter ──
      document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.dataset.cat;
          document.querySelectorAll('.news-card').forEach(card => {
            if (cat === 'all' || card.dataset.cat === cat) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });
        });
      });
 
      // ── View toggle ──
      const grid  = document.getElementById('news-grid');
      const btnG  = document.getElementById('btn-grid');
      const btnR  = document.getElementById('btn-row');
 
      btnG.addEventListener('click', () => {
        grid.classList.remove('row-view');
        btnG.classList.add('active');
        btnR.classList.remove('active');
        // restore grid columns
        document.querySelectorAll('.news-card').forEach(c => {
          c.className = c.className.replace(/\bcol-12\b/, 'col-12');
          if (!c.classList.contains('col-md-6')) c.classList.add('col-md-6');
          if (!c.classList.contains('col-lg-4')) c.classList.add('col-lg-4');
        });
      });
 
      btnR.addEventListener('click', () => {
        grid.classList.add('row-view');
        btnR.classList.add('active');
        btnG.classList.remove('active');
        document.querySelectorAll('.news-card').forEach(c => {
          c.classList.remove('col-md-6', 'col-lg-4');
        });
      });
