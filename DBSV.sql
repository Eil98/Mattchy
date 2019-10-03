-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mattchy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mattchy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mattchy` DEFAULT CHARACTER SET utf8 ;
USE `mattchy` ;

-- -----------------------------------------------------
-- Table `mattchy`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`image` (
  `idimage` INT NOT NULL,
  `src` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`idimage`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`review` (
  `idreview` INT NOT NULL,
  `vote` VARCHAR(45) NULL,
  `description` VARCHAR(300) NULL,
  `date` DATE NULL,
  `image_idimage` INT NOT NULL,
  PRIMARY KEY (`idreview`),
  INDEX `fk_review_image1_idx` (`image_idimage` ASC) VISIBLE,
  CONSTRAINT `fk_review_image1`
    FOREIGN KEY (`image_idimage`)
    REFERENCES `mattchy`.`image` (`idimage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`product` (
  `idproduct` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `size` VARCHAR(45) NULL,
  `colour` VARCHAR(45) NULL,
  `description` VARCHAR(120) NULL,
  `season` VARCHAR(45) NULL,
  `image_idimage` INT NOT NULL,
  `review_idreview` INT NOT NULL,
  PRIMARY KEY (`idproduct`),
  INDEX `fk_product_image1_idx` (`image_idimage` ASC) VISIBLE,
  INDEX `fk_product_review1_idx` (`review_idreview` ASC) VISIBLE,
  CONSTRAINT `fk_product_image1`
    FOREIGN KEY (`image_idimage`)
    REFERENCES `mattchy`.`image` (`idimage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_review1`
    FOREIGN KEY (`review_idreview`)
    REFERENCES `mattchy`.`review` (`idreview`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`purchase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`purchase` (
  `idpurchase` INT NULL,
  `totprice` INT NULL,
  `shipment` VARCHAR(45) NULL,
  `date` DATE NULL,
  PRIMARY KEY (`idpurchase`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`user` (
  `username` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `review_idreview` INT NOT NULL,
  `purchase_idpurchase` INT NOT NULL,
  PRIMARY KEY (`username`),
  INDEX `fk_user_review1_idx` (`review_idreview` ASC) VISIBLE,
  INDEX `fk_user_purchase1_idx` (`purchase_idpurchase` ASC) VISIBLE,
  CONSTRAINT `fk_user_review1`
    FOREIGN KEY (`review_idreview`)
    REFERENCES `mattchy`.`review` (`idreview`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_purchase1`
    FOREIGN KEY (`purchase_idpurchase`)
    REFERENCES `mattchy`.`purchase` (`idpurchase`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`adress`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`adress` (
  `street` INT NOT NULL,
  `cap` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `comment` VARCHAR(45) NULL,
  `region` VARCHAR(45) NULL,
  `user_username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_username`, `street`),
  INDEX `fk_adress_user_idx` (`user_username` ASC) VISIBLE,
  CONSTRAINT `fk_adress_user`
    FOREIGN KEY (`user_username`)
    REFERENCES `mattchy`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`brand` (
  `piva` VARCHAR(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `telnumber` INT NOT NULL,
  `product_idproduct` INT NOT NULL,
  PRIMARY KEY (`piva`),
  INDEX `fk_brand_product1_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_brand_product1`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `mattchy`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`product_has_purchase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`product_has_purchase` (
  `product_idproduct` INT NOT NULL,
  `purchase_idpurchase` INT NOT NULL,
  PRIMARY KEY (`product_idproduct`, `purchase_idpurchase`),
  INDEX `fk_product_has_purchase_purchase1_idx` (`purchase_idpurchase` ASC) VISIBLE,
  INDEX `fk_product_has_purchase_product1_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_purchase_product1`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `mattchy`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_purchase_purchase1`
    FOREIGN KEY (`purchase_idpurchase`)
    REFERENCES `mattchy`.`purchase` (`idpurchase`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mattchy`.`match`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mattchy`.`match` (
  `product_idproduct` INT NOT NULL,
  `product_idproduct1` INT NOT NULL,
  PRIMARY KEY (`product_idproduct`, `product_idproduct1`),
  INDEX `fk_product_has_product_product2_idx` (`product_idproduct1` ASC) VISIBLE,
  INDEX `fk_product_has_product_product1_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_product_product1`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `mattchy`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_product_product2`
    FOREIGN KEY (`product_idproduct1`)
    REFERENCES `mattchy`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
