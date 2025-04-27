import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import PackageCard from "./packageCard";
import "./packageCard.scss";
import React from "react";
import { SearchBox } from "../../searchInput/searchInput";

const PackageCardContainer = () => {
  const [packages, setPackages] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const [filterdPacks, setFilterdPacks] = useState([]);
  useEffect(() => {
    getPackages();
  }, []);
  const searchingItems = (value) => {
    setSearchedItem(value);
  };

  useEffect(() => {
    const filtered = packages.filter((pack) => {
      return pack.packageName.toLowerCase().includes(searchedItem.toLowerCase());
    });
    setFilterdPacks(filtered);
  }, [searchedItem]);


  const getPackages = async () => {
    try {
      const res = await axiosInstance.get("/package");
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || [];
        setPackages(data);
        setFilterdPacks(data)
      }
    } catch (error) {
      console.log("error on get packages", error);
    }
  };
  if (packages.length === 0) {
    return (
      <div className="tw-flex tw-h-96 tw-justify-center tw-items-center">
        <h1 className="tw-text-2xl tw-font-bold">No packages found</h1>
      </div>
    );
  }

  return (
    <div id="pack-card-container">
      <h3 className="tw-text-center tw-mt-3">Packages for you </h3>
      <div className="tw-flex tw-justify-center">
        <SearchBox searchingItems={searchingItems} placeholder="Search Packages"/>
      </div>
      <div className="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between tw-bg-neutral-50">
        {filterdPacks.map((item) => {
          return <PackageCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default PackageCardContainer;
