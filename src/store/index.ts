import { defineStore } from "pinia";
import { fetchPackage } from "../Api/fetch.ts";
import { computed, ref } from "vue";

interface PackageBase {
    type: string,
    name: string,
}

export type Version = {
    version: string,
    links: {
        self: string,
        entrypoints: string,
        stats: string,
    }
}

export interface Package extends PackageBase {
    hits: number,
    bandwidth: number,
    prev: {
        hits: number,
        bandwidth: number,
    },
    links: {
        self: string,
        versions: string
    }
}

export interface PackageDetail extends PackageBase {
    tags: object,
    versions: Version[],
    links: {
        stats: string
    }
}

export const useStore = defineStore('main', () => {
    const packages = ref<Package[]>([])
    const search = ref<string>('')
    const isStatusDialogPackage = ref<boolean>(false)
    
    const activePackage = ref<PackageDetail | null>(null)
    
    const modelSearch = computed({
        get: (): string => search.value,
        set: (val: string) => search.value = val
    })
    
    const modelDialogPackage = computed({
        get: (): boolean => isStatusDialogPackage.value,
        set: (val: boolean) => isStatusDialogPackage.value = val
    })
    const getStatsPackages = async () => {
        const data = await fetchPackage<Package[]>('/stats/packages')
        if (data) packages.value = data
    }
    
    const openDialogInfoPackage = async (item: Package) => {
        const { type, name } = item
        activePackage.value = null
        const data = await fetchPackage<PackageDetail>('/packages/' + type + '/' + name)
        if (!data) return
        activePackage.value = data
        modelDialogPackage.value = true
    }
    return { getStatsPackages, openDialogInfoPackage, packages, search, modelSearch, modelDialogPackage, activePackage }
});