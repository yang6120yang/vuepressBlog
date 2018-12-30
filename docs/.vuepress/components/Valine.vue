<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      // appId: 'I4CcXfTG15gkuNWRQSahvruG-gzGzoHsz',// your appId
      // appKey: 'kxOY06Rjp92qpb1dccypwuKc', // your appKey
      appId: 'YDpuN3BndytcEAiVaK5A5oK6-gzGzoHsz',// your appId
      appKey: 'Jif8w23k3cFdXhywdnByNlSp', // your appKey
      notify:false, 
      verify:false, 
      avatar:'wavatar', //(''/mp/identicon/monsterid/wavatar/robohash/retro/hide)
      placeholder: '开始评论' 
    });
  },
}
</script>