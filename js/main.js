 $(function () {
   $('#Search').click(function () {
     $('#res').html("");
	    // var api = "https://api.github.com/search/users?q="+ $('#OrgSearch').val()+"+type:org";
        var api = " https://api.github.com/orgs/" + $('#OrgSearch').val() + "/repos";
        var request = $.ajax({
          type: "GET",
          url: api,
          dataType: "json",
          success: function (result) {
        var html = '';
        for (i in result) {
          result = result.sort(function (a, b) {
          return parseFloat(b.forks_count) - parseFloat(a.forks_count);
        });
        html += '<div class="SearchResults"><p>Repo Name: <a href='+result[i].html_url + ' target="blank">' + result[i].name + '</a></p><p>Forks: <b>' + result[i].forks_count + '</b></p></div>';
            }      
        $('#res').html(html);
          }
      });
        request.fail(function (jqXHR, textStatus) {
          html = "<h2>No results found.  Please try again!</h2>";
          $('#res').html(html);
    });
  });
});