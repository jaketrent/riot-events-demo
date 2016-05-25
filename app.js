<app>
  <div style={getStyle()} onmouseenter={handleMouseEnter} onmouseleave={handleMouseLeave}>
    This is the app
    <yield />
  </div>

  <script>
    handleMouseEnter(evt) {
      // evt.preventDefault() called by riot

      // onmouseenter - won't mouseout in same physical space but in child
      // onmouseover - will do opposite ^
      console.log('---------------enter')

      // prevent riot from calling update
      // evt.preventUpdate = true
    }
    handleMouseLeave(evt) {
      console.log('-----leave')
      // evt.preventUpdate = true
    }
    getStyle() {
      console.log('html js')
      return 'outline:2px dashed red;'
    }
    // this.on('update', _ => {
    //   console.log('app update')
    // })
    this.on('*', evtName => {
      console.log('APP evt', evtName)
    })
  </script>
</app>
