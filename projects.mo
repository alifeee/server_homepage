<table class="result">
  <tr>
    <th>Name</th>
    <th>Port</th>
    <th>Subdomain</th>
    <th>GitHub</th>
  </tr>
  <tr>
    <td>---</td>
    <td>---</td>
    <td>---</td>
    <td>---</td>
  </tr>
  {{#projects}}
  <tr>
    <td>{{name}}</td>
    <td>{{port}}</td>
    <td>{{subdomain}}</td>
    <td>
      {{#url}}
        <a href="{{url}}">
          {{url}}
        </a>
      {{/url}}
      {{^url}}
        -
      {{/url}}
    </td>
  </tr>
  {{/projects}}
</table>
