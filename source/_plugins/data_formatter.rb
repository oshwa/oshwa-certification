require 'uri'
require 'cgi'

module Jekyll
  module DataFormatter
    def decode_html(str)
      CGI.unescapeHTML(str)
    end 
  end
end

Liquid::Template.register_filter(Jekyll::DataFormatter)
