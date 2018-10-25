
class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts
  has_many :galleries
  has_one_attached :avatar


  def self.scrape
   links = []
   require 'open-uri'
   require 'nokogiri'
   doc = Nokogiri::HTML(open("http://www.dadeschools.net/students.asp"))
   entries = doc.css('#main a')

   puts entries.length
   entries.map do |item|
     item.text

      links.push({text: item.text, url: item.attributes["href"].value })


    puts entries
    end

    links.each do |obj|
        obj[:text] = obj[:text] + " HW HELP" if obj[:text] == 'English'
        obj[:text] = obj[:text] + " HW HELP" if obj[:text] == 'Creole'
        obj[:text] = obj[:text] + " HW HELP" if obj[:text] == 'Spanish'
    end

    return links
  end



end
