class RemoveStatusColumnBookshelfbooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookshelfbooks, :status
  end
end
