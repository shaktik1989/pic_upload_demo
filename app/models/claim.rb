class Claim < ApplicationRecord
  validates_presence_of :name
  has_many :images, as: :imageable, dependent: :destroy

  accepts_nested_attributes_for :images
end
