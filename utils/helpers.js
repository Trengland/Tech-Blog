const moment = require('moment');

module.exports = {
  // formatDate: function(date, format) {
  //   return moment(date).utc().format(format);
  // },
  truncate: function(str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + ' ';
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(' '));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + '...';
    }
    return str;
  },
  stripTags: function(input) {
    return input.replace(/<(?:.|\n)*?>/gm, '');
  },
  editIcon: function(blogUser, loggedUser, blogId, floating = true) {
    if (blogUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/blogposts/edit/${blogId}" class="btn-floating halfway-fab blue">
        <i class="fas fa-edit fa-small"></i></a>`;
      } else {
        return `<a href="/blogposts/edit/${blogId}"><i class="fas fa-edit"></i></a>`;
      }
    } else {
      return '';
    }
  },
  // select: function(selected, options) {
  //   return options
  //     .fn(this)
  //     .replace(new RegExp(' value="' + selected + '"'), '$& selected="selected"')
  //     .replace(new RegExp('>' + selected + '</option>'), ' selected="selected"$&');
  // },
  deleteIcon: function(blogUser, loggedUser, blogId, floating = true) {
    if (blogUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<form action="/blogposts/${blogId}?_method=DELETE" method="POST">
        <button type="submit" class="btn-floating halfway-fab red"><i class="fas fa-trash-alt fa-small"></i></button></form>`;
      } else {
        return `<form action="/blogposts/${blogId}?_method=DELETE" method="POST">
        <button type="submit" class="btn red"><i class="fas fa-trash-alt"></i></button></form>`;
      }
    } else {
      return '';
    }
  },
  // select: function(selected, options) {
  //   return options
  //     .fn(this)
  //     .replace(new RegExp(' value="' + selected + '"'), '$& selected="selected"')
  //     .replace(new RegExp('>' + selected + '</option>'), ' selected="selected"$&');
  // }
}
