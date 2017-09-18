class Addpreviewpdfcolumn < ActiveRecord::Migration[5.1]
  def change
    add_column(:books, :preview_url, :text)
  end
end
